"""Build the OfficePress discussion brief using the selected Codex Python runtime.

Use the bundled Python environment for python-docx and Pillow. Matplotlib is an
additional plotting dependency installed in a task-local temporary venv. No
application dependency or system Python installation is changed.
"""
from pathlib import Path
from datetime import date
import json
import math
import re
import shutil
import hashlib

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
from PIL import Image, ImageDraw, ImageFont
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
ASSETS = HERE / 'assets'
SOURCES = json.loads((HERE / 'research/sources.json').read_text())
PILOTS = json.loads((HERE / 'research/pilot-update.json').read_text())
FONT = '/System/Library/Fonts/Supplemental/Arial.ttf'
BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
COLORS = ['#2F5BEA', '#6A3BE4', '#E2551B', '#0F8F6A']
INK = '#172338'
MUTED = '#526174'
WIDTH = 6.98

model = {
    'date': '2026-11-13',
    'currency': 'USD unless explicitly identified as EUR',
    'reported_company_stage': PILOTS['company_stage'],
    'reported_pilot_baseline': {
        'organisations':1, 'app_deployments':6, 'commercial_terms':'Free in exchange for feedback',
        'reported_free_pilot_revenue':0, 'company_wide_revenue':None, 'company_wide_paying_customers':None,
        'source':'P5 founder report, not independent usage audit'},
    'employer_business_proxy': {'United States': 5580000, 'United Kingdom': 1472000,
        'Canada': 1100000, 'Australia': 996203, 'New Zealand': 161560},
    'annual_revenue_per_account_assumption': 1800,
    'sam_filters_assumptions': {'industry_fit': .20, 'team_size_fit': .25, 'language_readiness_and_buying_fit': .60},
    'scenarios_year_end_paying_accounts': {'Cautious': [50,150,400], 'Base': [100,400,1200], 'Expansion': [150,800,3000]},
    'assumed_monthly_gross_logo_churn': None,
    'assumed_annual_gross_logo_churn': .10,
    'monthly_unit_economics': {'revenue':150, 'infrastructure_and_storage':12, 'ai_and_provider_usage':8,
        'variable_support':15, 'payments_and_other':5},
    'cac_assumptions': [600,1200,2400],
    'valuation_sensitivity_multiples': [3,5,8],
    'pricing_test_monthly_account_prices': [79,149,299],
    'tam_annual_price_sensitivity': [900,3000],
    'sam_filter_sensitivity': [.01,.05],
    'acquisition_capacity_assumptions': {'qualified_demo_conversion': .20,
        'productive_partners':15, 'new_accounts_per_partner_per_month':2, 'direct_new_accounts_per_month':40},
    'fixed_operating_cash_cost_cases_monthly': [35000,65000,100000],
    'capital_planning_months':18,
    'capital_contingency':.15,
    'contribution_threshold_fixed_overhead':50000,
    'notes': [
        'Commercial assumptions are proposals, not measured OfficePress performance.',
        'Reference populations differ in year, coverage, firm-size definitions and rounding.',
        'Five-country employer universe is a bounded market proxy, not a measured global English-language TAM.',
        'Annual recognized subscription revenue uses a linear average of beginning and ending customer counts.',
        'No implementation fees, taxes, exchange movements or pass-through usage revenue included in ARR.'
    ]
}
universe = sum(model['employer_business_proxy'].values())
sam_accounts = universe * math.prod(model['sam_filters_assumptions'].values())
arpa = model['annual_revenue_per_account_assumption']
model['calculated'] = {'universe': universe, 'scoped_tam': universe*arpa,
    'sam_accounts':sam_accounts, 'sam_annual_revenue':sam_accounts*arpa,
    'base_som_accounts':1200, 'base_som_arr':1200*arpa, 'base_som_sam_share':1200/sam_accounts}
model['calculated']['fixed_operating_cash_envelopes'] = [round(c*18*1.15) for c in model['fixed_operating_cash_cost_cases_monthly']]
model['calculated']['tam_price_sensitivity'] = [universe*c for c in model['tam_annual_price_sensitivity']]
model['calculated']['sam_filter_sensitivity'] = [universe*arpa*c for c in model['sam_filter_sensitivity']]
model['calculated']['contribution_threshold_accounts'] = math.ceil(50000/110)
model['scenario_results'] = {}
for name, counts in model['scenarios_year_end_paying_accounts'].items():
    beginning = [0, *counts[:-1]]
    model['scenario_results'][name] = {'year_end_arr':[c*arpa for c in counts],
        'recognized_revenue':[(b+e)/2*arpa for b,e in zip(beginning,counts)],
        'gross_additions': [counts[0], *[round(counts[i]-counts[i-1]*.9) for i in (1,2)]]}
assert round(sam_accounts) == 279293
assert model['scenario_results']['Base']['year_end_arr'][-1] == 2160000
assert model['scenario_results']['Base']['recognized_revenue'][-1] == 1440000
(HERE/'research/model.json').write_text(json.dumps(model, indent=2)+'\n')


def font(size, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, size)


def wrap(draw, text, f, width):
    lines=[]
    line=''
    for word in text.split():
        test=(line+' '+word).strip()
        if draw.textlength(test, font=f) > width and line:
            lines.append(line)
            line=word
        else:
            line=test
    return lines+[line]


def diagram_portfolio():
    im=Image.new('RGB',(1800,660),'white')
    d=ImageDraw.Draw(im)
    groups=[('Communicate','Conversations and relationships',7),('Create','Knowledge and creative work',9),
            ('Operate','People finance and processes',7),('Commerce','Catalogue through fulfillment',5)]
    for i,(name,sub,count) in enumerate(groups):
        x=20+i*445
        d.rounded_rectangle((x,25,x+420,490),radius=24,fill='#F4F6FA',outline='#D9DFE8',width=2)
        d.rounded_rectangle((x+24,55,x+96,127),radius=18,fill=COLORS[i])
        d.text((x+46,68),str(count),font=font(42,True),fill='white')
        d.text((x+24,165),name,font=font(36,True),fill=INK)
        for j,line in enumerate(wrap(d,sub,font(27),360)):
            d.text((x+24,226+j*37),line,font=font(27),fill=MUTED)
        samples=[['Inbox','Support','Clients'],['Drive','Forms','Designs'],['Approvals','Procurement','Resourcing'],['Products','Orders','Inventory']][i]
        for j,name2 in enumerate(samples):
            d.text((x+24,335+j*38),name2,font=font(28),fill=INK)
    d.rounded_rectangle((20,525,1775,635),radius=18,fill='#E9EDF3')
    d.text((50,548),'Shared foundation and two platform apps',font=font(30,True),fill=INK)
    d.text((50,590),'App Develop and App Cloud   |   Catalogue scope is not shipping status',font=font(25),fill=MUTED)
    im.save(ASSETS/'portfolio.png')


def diagram_journey():
    im=Image.new('RGB',(1800,460),'white')
    d=ImageDraw.Draw(im)
    steps=[('Receive','A request or enquiry','Inbox or Forms'),('Coordinate','Owner tasks and review','Clients and Approvals'),
           ('Execute','Documents and delivery','Drive and Orders'),('Track','Progress and exceptions','Pipelines')]
    for i,(a,b,c) in enumerate(steps):
        x=12+i*450
        d.rounded_rectangle((x,30,x+412,360),radius=18,fill='#F4F6FA',outline='#D9DFE8',width=2)
        d.text((x+24,50),str(i+1),font=font(33,True),fill=COLORS[i])
        d.text((x+24,110),a,font=font(38,True),fill=INK)
        for j,line in enumerate(wrap(d,b,font(27),360)):
            d.text((x+24,178+j*35),line,font=font(27),fill=MUTED)
        for j,line in enumerate(wrap(d,c,font(27,True),360)):
            d.text((x+24,272+j*33),line,font=font(27,True),fill=INK)
        if i<3:
            d.polygon([(x+418,180),(x+442,197),(x+418,214)],fill='#7B8797')
    d.text((22,397),'Proposed cross app journey   |   Integrations and data flows require validation',font=font(27),fill=MUTED)
    im.save(ASSETS/'journey.png')


def diagram_market():
    im=Image.new('RGB',(1800,540),'white')
    d=ImageDraw.Draw(im)
    rows=[('SCOPED TAM','9.31 million employer businesses','$16.76 billion annual potential',COLORS[0]),
          ('ASSUMED SAM','279000 screened prospects','$503 million annual potential',COLORS[1]),
          ('YEAR THREE BASE SOM','1200 paying customers','$2.16 million exit ARR',COLORS[3])]
    for i,(a,b,c,color) in enumerate(rows):
        y=20+i*160
        d.rounded_rectangle((20,y,1770,y+140),radius=18,fill='#F4F6FA',outline='#D9DFE8',width=2)
        d.rectangle((20,y+20,31,y+120),fill=color)
        d.text((57,y+20),a,font=font(25,True),fill=color)
        d.text((57,y+65),b,font=font(37,True),fill=INK)
        d.text((1020,y+73),c,font=font(29),fill=INK)
    d.text((24,505),'Illustrative model using USD1800 per account per year   |   Boxes are not to scale',font=font(24),fill=MUTED)
    im.save(ASSETS/'market.png')


def diagram_pilots():
    im=Image.new('RGB',(1800,390),'white')
    d=ImageDraw.Draw(im)
    d.rounded_rectangle((20,20,1780,370),radius=20,fill='#F4F6FA',outline='#D9DFE8',width=2)
    d.text((50,44),'Shoppable Business',font=font(36,True),fill=INK)
    d.text((50,100),'1 pilot organisation   |   6 active app deployments   |   Free for feedback',font=font(30),fill=INK)
    for i,(name,color) in enumerate(zip(['Resourcing','Approvals','Support','Inbox','IMS','Orders'],[COLORS[2],COLORS[2],COLORS[0],COLORS[0],COLORS[3],COLORS[3]])):
        x=50+i*286
        d.rounded_rectangle((x,176,x+264,255),radius=14,fill='white',outline=color,width=3)
        box=d.textbbox((0,0),name,font=font(28,True))
        d.text((x+(264-(box[2]-box[0]))/2,198),name,font=font(28,True),fill=INK)
    d.text((50,307),'Founder reported use   |   Not six customer logos or evidence of paid demand',font=font(26),fill=MUTED)
    im.save(ASSETS/'pilot-traction.png')


def charts():
    plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11,'axes.spines.top':False,
        'axes.spines.right':False,'axes.spines.left':False,'axes.edgecolor':'#C7D0DD',
        'text.color':INK,'axes.labelcolor':INK,'xtick.color':MUTED,'ytick.color':MUTED})
    fig,ax=plt.subplots(figsize=(10,3.15),layout='constrained')
    names=list(model['employer_business_proxy'])
    vals=[x/1e6 for x in model['employer_business_proxy'].values()]
    ax.barh(names[::-1],vals[::-1],color=['#8FA7ED']*4+[COLORS[0]],height=.62)
    ax.set_xlim(0,6.25)
    ax.set_xlabel('Employer businesses in millions')
    for i,v in enumerate(vals[::-1]): ax.text(v+.07,i,f'{v:.2f}m',va='center',fontsize=11,fontweight='bold')
    ax.grid(axis='x',color='#E9EDF4')
    ax.set_axisbelow(True)
    fig.savefig(ASSETS/'market-counts.png',dpi=230,facecolor='white')
    plt.close(fig)
    fig,ax=plt.subplots(figsize=(10,3.5),layout='constrained')
    for i,(name,data) in enumerate(model['scenario_results'].items()):
        vals=[x/1e6 for x in data['year_end_arr']]
        ax.plot([1,2,3], vals, marker='o',lw=2.8,color=[MUTED,COLORS[0],COLORS[3]][i],label=name)
        ax.annotate(f'${vals[-1]:.2f}m',(3,vals[-1]),xytext=(10,0),textcoords='offset points',va='center',fontweight='bold')
    ax.set_xlim(.9,3.45); ax.set_ylim(0,6)
    ax.set_xticks([1,2,3],['Year one','Year two','Year three'])
    ax.set_ylabel('Year end ARR in USD millions')
    ax.grid(axis='y',color='#E9EDF4'); ax.legend(loc='upper left',frameon=False,ncol=3)
    fig.savefig(ASSETS/'arr-scenarios.png',dpi=230,facecolor='white')
    plt.close(fig)
    fig,ax=plt.subplots(figsize=(10,2.5),layout='constrained')
    categories=['Revenue','Infrastructure','AI and providers','Variable support','Payments and other','Gross profit']
    vals=[150,12,8,15,5,110]
    ax.bar(categories,vals,color=[COLORS[0],'#AEBACA','#AEBACA','#AEBACA','#AEBACA',COLORS[3]],width=.65)
    ax.set_ylim(0,180); ax.set_ylabel('USD per account per month')
    ax.tick_params(axis='x',labelsize=9)
    for i,v in enumerate(vals): ax.text(i,v+4,f'${v}',ha='center',fontweight='bold')
    ax.grid(axis='y',color='#E9EDF4'); ax.set_axisbelow(True)
    fig.savefig(ASSETS/'unit-economics.png',dpi=230,facecolor='white')
    plt.close(fig)


diagram_portfolio(); diagram_journey(); diagram_market(); diagram_pilots(); charts()
shutil.copy2(ROOT/'.agents/resources/officepress-kit/reference/board/inbox-board-light.png',ASSETS/'inbox-design-reference.png')

doc=Document()
sec=doc.sections[0]
sec.page_width=Inches(8.5); sec.page_height=Inches(11)
sec.left_margin=sec.right_margin=Inches(.76)
sec.top_margin=Inches(.66); sec.bottom_margin=Inches(.65)
sec.header_distance=sec.footer_distance=Inches(.25)
styles=doc.styles
for name in ('Normal','Title','Subtitle','Heading 1','Heading 2','Heading 3','Caption','Header','Footer'):
    styles[name].font.name='Arial'
    styles[name].font.color.rgb=RGBColor(0,0,0)
    styles[name]._element.get_or_add_rPr().append(OxmlElement('w:rFonts')) if False else None
for style in styles:
    # The bundled Word template carries blue title and subtitle border residue.
    # Remove paragraph borders before authoring so the title remains plain black.
    for border in list(style._element.iter(qn('w:pBdr'))):
        border.getparent().remove(border)
normal=styles['Normal']
normal.font.size=Pt(11)
normal.paragraph_format.line_spacing=1.10
normal.paragraph_format.space_after=Pt(7)
normal.paragraph_format.widow_control=True
styles['Title'].font.size=Pt(31); styles['Title'].font.bold=True
styles['Title'].paragraph_format.space_after=Pt(13)
styles['Subtitle'].font.size=Pt(14)
styles['Subtitle'].font.italic=False
styles['Heading 1'].font.size=Pt(21); styles['Heading 1'].font.bold=True
styles['Heading 1'].paragraph_format.space_after=Pt(12)
styles['Heading 1'].paragraph_format.space_before=Pt(0)
styles['Heading 2'].font.size=Pt(13); styles['Heading 2'].font.bold=True
styles['Heading 2'].paragraph_format.space_before=Pt(11)
styles['Heading 2'].paragraph_format.space_after=Pt(5)
styles['Caption'].font.size=Pt(8.5); styles['Caption'].font.italic=False
styles['Caption'].font.bold=False
styles['Caption'].paragraph_format.space_after=Pt(8)
header=sec.header.paragraphs[0]
header.text='OfficePress    Product and investment briefing'
header.style=styles['Header']; header.runs[0].font.size=Pt(8)
footer=sec.footer.paragraphs[0]
footer.alignment=WD_ALIGN_PARAGRAPH.RIGHT
r=footer.add_run('Discussion draft   |   13 November 2026   |   '); r.font.size=Pt(8)
field=OxmlElement('w:fldSimple'); field.set(qn('w:instr'),'PAGE'); footer._p.append(field)
doc.core_properties.title='OfficePress product and investment brief'
doc.core_properties.subject='Product details market opportunity business models and CEO mandate'
doc.core_properties.author='OfficePress'
doc.core_properties.keywords='OfficePress, investor, CEO, market sizing, product strategy'
transcript=[]
page_names=[]


def p(text, small=False, bold=False):
    para=doc.add_paragraph()
    for i,part in enumerate(re.split(r'\*\*(.*?)\*\*',text)):
        r=para.add_run(part)
        r.bold=bold or i%2==1
        if small: r.font.size=Pt(9)
    transcript.append(text)
    return para


def h(text):
    doc.add_heading(text,level=2); transcript.append('\n## '+text)


def page(title):
    if page_names: doc.add_page_break()
    title=re.sub(r'^\d{2} ',f'{len(page_names):02d} ',title)
    page_names.append(title)
    doc.add_heading(title,level=1)
    transcript.append('\n# '+title)


def note(text):
    return p(text,small=True)


def image(name,caption,width=WIDTH):
    caption=re.sub(r'^Figure \d+',f'Figure {len(doc.inline_shapes)+1}',caption)
    para=doc.add_paragraph()
    para.paragraph_format.space_after=Pt(3)
    para.paragraph_format.keep_with_next=True
    pic=para.add_run().add_picture(str(ASSETS/name),width=Inches(width))
    pic._inline.docPr.set('descr',caption)
    cp=doc.add_paragraph(caption,style='Caption')
    transcript.append(f'Figure {name}: {caption}')


def table(headers,rows,widths=None):
    t=doc.add_table(rows=1,cols=len(headers))
    t.alignment=WD_TABLE_ALIGNMENT.CENTER
    t.autofit=False
    widths=widths or [WIDTH/len(headers)]*len(headers)
    for col,w in zip(t.columns,widths): col.width=Inches(w)
    borders=OxmlElement('w:tblBorders')
    for name in ('top','left','bottom','right','insideH','insideV'):
        edge=OxmlElement('w:'+name); edge.set(qn('w:val'),'single'); edge.set(qn('w:sz'),'4'); edge.set(qn('w:color'),'D9D9D9'); borders.append(edge)
    t._tbl.tblPr.append(borders)
    for row_idx,items in enumerate([headers,*rows]):
        row=t.rows[0] if row_idx==0 else t.add_row()
        pr=row._tr.get_or_add_trPr(); pr.append(OxmlElement('w:cantSplit'))
        if row_idx==0: pr.append(OxmlElement('w:tblHeader'))
        for i,(cell,value) in enumerate(zip(row.cells,items)):
            cell.width=Inches(widths[i]); cell.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
            tcpr=cell._tc.get_or_add_tcPr()
            margins=OxmlElement('w:tcMar')
            for side in ('top','bottom','left','right'):
                el=OxmlElement('w:'+side); el.set(qn('w:w'),'85'); el.set(qn('w:type'),'dxa'); margins.append(el)
            tcpr.append(margins)
            if row_idx==0:
                sh=OxmlElement('w:shd'); sh.set(qn('w:fill'),'E8EDF5'); tcpr.append(sh)
            cell.text=str(value)
            if isinstance(value,str) and value.startswith('https://'):
                cell.text=''
                hyperlink(cell.paragraphs[0],value,value)
            for para in cell.paragraphs:
                para.paragraph_format.space_after=Pt(2)
                para.paragraph_format.space_before=Pt(2)
                para.paragraph_format.line_spacing=1.04
                for run in para.runs:
                    run.font.name='Arial'; run.font.size=Pt(10)
                    run.font.bold=(row_idx==0)
                    run.font.color.rgb=RGBColor(0,0,0)
        transcript.append(' | '.join(map(str,items)))
    doc.add_paragraph().paragraph_format.space_after=Pt(0)
    return t


def hyperlink(para,label,url):
    hl=OxmlElement('w:hyperlink'); hl.set(qn('r:id'),para.part.relate_to(url,RT.HYPERLINK,is_external=True))
    run=OxmlElement('w:r'); props=OxmlElement('w:rPr')
    color=OxmlElement('w:color'); color.set(qn('w:val'),'1F4B99'); props.append(color)
    size=OxmlElement('w:sz'); size.set(qn('w:val'),'19'); props.append(size)
    run.append(props); text=OxmlElement('w:t'); text.text=label; run.append(text); hl.append(run); para._p.append(hl)


# 1
doc.add_paragraph('OfficePress product and investment brief',style='Title')
doc.add_paragraph('A discussion document for an investor and prospective CEO',style='Subtitle')
p('Global English speaking small businesses   |   13 November 2026',small=True)
page_names.append('OfficePress product and investment brief')
p('**OfficePress is a pre-seed business with active free pilots.** The founder reports six app deployments used at Shoppable Business in exchange for feedback. The portfolio aims to make operational software easier to adopt, connect and control. The next commercial test is whether this usage can translate into repeatable paid demand. [P1 P2 P5]')
image('portfolio.png','Figure 1  Accepted catalogue structure with selected examples. The 30 intended apps are not a claim of 30 production ready products. Source P2 and P4.')
p('**Recommended decision:** fund a focused pre-seed programme that turns live pilot learning into independent paying customers. Select a workflow package using the Shoppable experience, measure outcomes and delivery costs, and test a price with new organisations before expanding the launch.')
p('This briefing explains the product portfolio, proposed customer value, alternatives, business models, a bottom up market model, historical transaction benchmarks and a CEO operating agenda. Recommendations and financial scenarios are explicitly distinguished from project facts.')
note('Pilot use and free terms are founder reported as of 13 November 2026; the six reported pilots contribute no subscription revenue. Company wide revenue, paying customer totals, team, ownership and funding amount remain undisclosed. This is not a priced financing offer. All dollar amounts are USD unless marked otherwise.')

# 2
page('01 Investment case and evidence')
p('OfficePress has a coherent product thesis: operational work is spread across conversations, records, files, approvals and transactions, while the buyer wants a process completed. Its four families provide a useful portfolio structure. The investment question is whether a small initial package can deliver that outcome with less adoption effort and sustainable service cost. [P1 P2]')
h('What makes the case plausible')
p('Integrated business software is an established market. General Atlantic reported an Odoo minority transaction at a EUR7 billion valuation in January 2026 and more than 170000 paying customers. Zoho markets more than 50 apps in its Standard bundle. These are demand and competition signals, not proof that OfficePress has product market fit. [S6 S8]')
table(['Evidence class','What is supported','What is still required'],[
    ['Accepted product direction','30 app descriptions and four families; incremental adoption and company control. [P1 P2]','Prioritised release scope and customer validated requirements.'],
    ['Bounded implementation evidence','Maintained app shell and common component proofs with documented limits. [P3]','Per product runtime inventory, production security, operational and integration evidence.'],
    ['External market evidence','Official business counts; vendor offerings and disclosed transactions. [S1 to S16]','Segment demand, willingness to pay and attainable channels.'],
    ['Pilot traction','Founder reports six free app pilots actively used at one organisation, Shoppable Business. [P5]','User and workflow metrics, measured outcomes, paid conversion and independent customer demand.']
],[1.37,2.83,2.78])
h('What an investor should underwrite')
p('The pre-seed investment should turn existing pilot use into evidence of repeatable paid value and a maintainable delivery model. Catalogue size is an option on expansion, not a revenue multiplier. The next tests are independent customer acquisition, renewal and profitable delivery.')
h('What a prospective CEO should accept')
p('A mandate to narrow scope, choose a buyer and establish commercial accountability. The CEO needs authority over product sequencing, packaging, channel economics and hiring, alongside a clear founder agreement on technology stewardship and capital allocation.')

# Founder update after the first draft
page('02 Active pilot traction')
p('**Six released pilots are actively used at Shoppable Business, according to the founder.** Resourcing, Approvals, Support, Inbox, IMS and Orders were provided free in exchange for feedback. This is operational adoption evidence from one organisation at the pre-seed stage. [P5]')
image('pilot-traction.png','Figure 2  Founder reported pilot baseline as of 13 November 2026. Six app deployments belong to one organisation. Usage volumes and outcomes have not been independently audited. Source P5.')
table(['Pilot','Founder supplied deployment'],[[x['name'],x['url']] for x in PILOTS['pilots']],[1.35,5.63])
h('What this establishes')
p('OfficePress has been put into use beyond a presentation or isolated proof. One organisation is using several pilot applications and providing feedback. This supplies a concrete setting for observing workflows, correcting problems and measuring value. Start dates, active users, activity volumes and quantified outcomes were not supplied. [P5]')
h('What remains to be validated')
p('Free access establishes neither willingness to pay nor independent customer acquisition. Count this as one pilot organisation and six deployments, with no subscription revenue from this free cohort. Company wide revenue and paid customer totals remain undisclosed. The relationship between the founder and the pilot organisation has not been specified.')
h('Turn pilot use into pre-seed evidence')
p('Record deployment dates, active users, completed workflows, support effort and outcomes. Interview the buyer about value and price, then test the package with independent organisations. Track free usage separately from paid conversion and renewals.')

# 3
page('02 Customers and the work they need done')
p('**Proposed initial buyer:** an owner, operations lead or practice manager at a 5 to 50 person English speaking business. Start with teams that repeatedly move requests from an email or form into assigned work, approvals and delivery. This segment and team size are hypotheses to test, not measured demand.')
table(['Candidate segment','Recurring job','Evidence to collect'],[
    ['Agencies and professional services','Turn enquiries into assigned client work, approvals and delivery.','Frequency of handoffs; existing tools; paid pilot and measured completion time.'],
    ['Distributors and small commerce teams','Coordinate orders, suppliers, purchasing and fulfillment exceptions.','Operational complexity; connector requirements; onboarding effort.'],
    ['People and administration teams','Handle requests, onboarding, forms and internal approvals.','Buyer authority; data sensitivity; integration and localisation costs.']
],[1.73,2.53,2.72])
image('journey.png','Figure 2  An illustrative cross app customer journey. Product names follow P2; the connections and workflow are a proposed commercial use case, not verified integrations.')
h('The pain hypothesis')
p('A team may already own capable email, spreadsheets and task tools, yet still copy information between them and chase people for the next step. The first discovery interviews should reconstruct a real recent request, identify missed handoffs and measure the time spent. Do not claim a universal hours saved figure without observation.')
h('A purchase trigger')
p('Sell against a visible operational problem: an unowned enquiry, slow approval, missed follow up or repeated rekeying. Keep existing systems where they work. A controlled first workflow is easier to evaluate than replacing every tool at once.')

# 4
page('03 Conversations and creation portfolio')
p('The accepted catalogue contains 28 family products and two platform apps. The entries below state intended jobs, rather than release status or availability. [P2]')
h('Communicate')
table(['Product','Intended product detail'],[
    ['Inbox','Connect existing POP3 and SMTP accounts; keep tenant isolated local messages; work through Inbox, Chat and Board views.'],
    ['Chat','Internal channels and group discussion, media, bots, plugins, integrations and agent collaboration.'],
    ['Meet','Live meetings and calls connected to Calendar invitations.'],
    ['Calendar','Scheduling, invitations, registration events and shared availability.'],
    ['Support','Team customer conversations across email, Facebook Messenger and WhatsApp through resolution and closure.'],
    ['Agent','A personal workspace for setting up and working with AI agents.'],
    ['Clients','Client profiles, leads, assignments and relationship workflows in records and a board.']
],[1.2,5.78])
h('Create')
table(['Product','Intended product detail'],[
    ['Drive','Explore personal and app managed files; open supported files in relevant apps.'],
    ['Tables','SQL native PostgreSQL grid with typed editing, views, imports, exports and governed MCP access.'],
    ['Forms','Dynamic forms, templates, submissions, responses and generated files.'],
    ['Whiteboards','Freeform drawing for visual thinking.'],
    ['Diagrams','Structured process, system and relationship diagrams.'],
    ['Context','Research an idea into verified, versionable knowledge and share it as a file or live service.'],
    ['UIUX','Editable and clickable black and white wireframes for form and function.'],
    ['Designs','Polished visual work on an editable canvas, with previews and builder handoff.'],
    ['Graphics','Shapes, text, pixels and layered effects; editable work inside a viewable PNG.']
],[1.2,5.78])

# 5
page('04 Operations commerce and platform portfolio')
h('Operate')
table(['Product','Intended product detail'],[
    ['Resourcing','Organisation, personnel, role profiles and assignments, plus hiring workflows and Careers.'],
    ['Procurement','Vendor accreditation, offers, requisitions, purchase orders, RFQs and quotes.'],
    ['Accounting','Receivables, disbursements and actual cash flow linked to obligations and settlement.'],
    ['Approvals','Assigned approvers and reviewers, with durable review rounds, decisions and comments.'],
    ['Sign','Digital document signing built around cryptographic provability.'],
    ['Content','Headless pages, categories and associated files across multiple websites.'],
    ['Pipelines','Cross app process maps, live work cards, links to source systems and historical replay.']
],[1.2,5.78])
h('Commerce')
table(['Product','Intended product detail'],[
    ['Products','Shared catalogue with content, categories, variants, collections, offers and bundles.'],
    ['Orders','Intake through fulfillment, including shipment ownership, tasks, SLA, activity and automations.'],
    ['Inventory','Client inventory records and stock activity.'],
    ['Payments','Order forms, invoices and payment links through configured payment options.'],
    ['Fulfillments','3PL accreditation, waybills, pickups and deliveries through approved vendors.']
],[1.2,5.78])
h('App platform')
table(['Product','Intended product detail'],[
    ['Develop','A local AI software team that plans, implements, tests and reviews requested changes with user escalation.'],
    ['Cloud','Management over AWS, GCP and Azure for deployment and supporting cloud services.']
],[1.2,5.78])
note('Source P2. App Develop and App Cloud have no assigned branded family mark or colour. Inbox Chat is not the separate Chat app; Careers belongs to Resourcing. These boundaries matter when pricing and describing the suite.')

# 6
page('05 Product experience and first package')
p('Shared navigation, account settings, workflow boards, forms, message templates and contextual agent interfaces are intended to reduce relearning between apps. The maintained proofs demonstrate bounded examples; they do not establish shared production identity, cross app data propagation or every external integration. [P3]')
image('inbox-design-reference.png','Figure 3  Supplied Inbox board design reference with illustrative messages and historical office inbox branding. It illustrates workflow presentation only; it is not a current production screenshot or proof of a working suite. Source P4.')
h('Proposed first package')
p('Test **request to completion** for a narrow services segment: receive an enquiry, associate a client, assign work, collect a form or approval, retain relevant files and track completion. Inbox, Clients, Forms and Approvals are candidate product boundaries. Delivery may initially use only a subset; verify the integrations before selling the full journey.')
h('Define company control in a contract')
p('Translate the brand promise into explicit rights and responsibilities: deployment options, data access and export, upgrade control, administrator permissions, backup and recovery, supported extensions, and exit assistance. Licensing and hosting remain business decisions. Neither open source nor self hosting is established merely by the promise. [P1]')

# 7
page('06 Value proposition and defensibility')
p('**Proposed positioning:** OfficePress helps small businesses complete operational work through connected apps they can adopt gradually and control. This is a candidate message for customer testing. It should become a differentiated claim only after the product and commercial offer make it true.')
table(['Proposed advantage','Why the buyer might care','Proof required'],[
    ['Incremental adoption','Start with one recurring problem and avoid a forced full suite migration.','A first workflow deployed without replacing unrelated tools.'],
    ['Company control','Keep meaningful authority over business data and operating choices.','Documented contract, export, recovery and deployment responsibilities.'],
    ['Connected execution','Reduce handoffs between conversations, records and approvals.','Working identity, permissions, links and state across selected apps.'],
    ['Consistent experience','Spend less time relearning common actions.','Observed task success across two or more apps.'],
    ['Contextual agents','Assist within the work rather than in a separate chat context.','Permission checks, review controls, action logs and bounded unit costs.']
],[1.42,2.65,2.91])
h('What is not yet a moat')
p('App count, a modern interface and AI features are readily matched. Odoo, Zoho, Microsoft and monday already combine broad applications, integrations or AI capabilities. OfficePress should not claim to be the first integrated business suite or the only company controlled option. ERPNext is an explicit self hosting alternative. [S6 S8 S9 S10 S11]')
h('What could become durable')
p('A defensible business could build repeatable industry workflows, trusted migrations, distribution through capable partners, reliable integrations and a reputation for predictable ownership costs. These assets compound through successful customer operation. A shared technical foundation may lower delivery cost, but savings must be measured after support, upgrades and integration maintenance.')
h('The falsification test')
p('If target buyers prefer the incumbent bundle after seeing the workflow and full operating cost, narrow the use case or change the package. Differentiation must survive a real purchase decision, not only a feature comparison.')

# 8
page('07 Alternatives and commercial benchmarks')
p('Customers can choose a mature suite, assemble point tools or retain their current spreadsheets and email. The table compares buying patterns and observed offers, not equivalent functionality or total implementation cost. Prices were checked on 13 November 2026 and can vary by location, seats, commitment and promotion.')
table(['Alternative','Observed commercial offer','Implication for OfficePress'],[
    ['Odoo','Integrated business applications with open core ecosystem; paid suite and partner delivery. Exact regional price not relied on here. [S6 S7]','Closest breadth and control comparator. Win a specific adoption or workflow problem.'],
    ['Zoho One','Standard advertises 50+ apps; USD37 all employee or USD90 flexible user per month with annual licensing and applicable first year terms. [S8]','Broad low cost bundling is established. Validate the licence and support comparison.'],
    ['ERPNext and Frappe','Open source ERP; self host or hosted site from USD5/month, plus implementation and appropriate resources. [S9]','Company control and cheap hosting alone are insufficient differentiation.'],
    ['Microsoft 365','Observed US Business Basic USD7/user/month; Standard with Copilot USD23.50, paid yearly. [S10]','Often an existing productivity layer. Prefer coexistence where replacement adds little value.'],
    ['monday work management','Observed annual 10 seat selection: Basic USD9, Standard USD12, Pro USD19 per seat/month; credits and offers vary. [S11]','Strong workflow alternative; compare setup effort and connected operational depth.'],
    ['HubSpot platform','Observed Starter USD7 promotional versus USD20 reference per seat/month; higher editions and credits differ. [S12]','Customer relationship software can expand into adjacent workflow needs.'],
    ['Existing tools and manual work','Email, spreadsheets and ad hoc approvals. No new licence purchase, but operating effort remains.','Prove that switching and onboarding are worth the disruption.']
],[1.3,3.15,2.53])
h('How to run a credible competitive test')
p('Use one customer scenario, the same user count and a 12 month horizon. Include migration, required plans, connectors, hosting, support, training and ongoing administration. Compare time to first useful result and recurring work completed. A headline subscription price does not establish lower total cost.')
note('S8 is an observed public page, not a guaranteed renewal quote. S9 is an infrastructure entry price, not an equivalent suite subscription. S10 to S12 represent different product scopes. Never imply feature parity from the price comparison.')

# 9
page('08 Valuation evidence and its limits')
p('Disclosed transactions show that software businesses serving operational work can become valuable. They do not set the value of an early OfficePress company. Preserve the date, currency and transaction type rather than presenting a ranking of unlike headline numbers.')
table(['Reference','Disclosed value and event','Interpretation'],[
    ['Odoo January 2026','EUR7 billion company valuation in a secondary minority stake transaction. [S6]','Most relevant suite comparator, but a mature global business with substantial paying adoption.'],
    ['Odoo November 2024','EUR500 million secondary transaction at EUR5 billion company valuation. [S7]','Earlier price observation. Secondary proceeds are not fresh operating capital.'],
    ['Zendesk November 2022','Approximately USD10.2 billion completed all cash acquisition. [S13]','Historical control transaction for a scaled customer service business; not a current private financing quote.'],
    ['Base44 June 2025','Wix announced approximately USD80 million initial consideration plus earnouts. Its 2025 filing reports about USD92 million acquisition consideration including contingencies. [S14 S15]','Adjacent AI app creation example. Headline deal terms and acquisition accounting differ; not a clean cash price or comparable multiple.']
],[1.43,3.0,2.55])
h('An OfficePress valuation is not established')
p('OfficePress is pre-seed, with founder reported active free pilots at one organisation. This reduces some uncertainty about practical use but does not establish paid demand or an ARR multiple. Financing terms, company financials, ownership and IP review remain undisclosed. A pre-seed price must reflect the team, assets, pilot learning, capital needs and milestones rather than mature company headline values. [P5]')
h('Use multiples only as sensitivities')
p('For illustration, USD1 million of recurring revenue at 3, 5 or 8 times implies USD3 million, USD5 million or USD8 million of enterprise value. Those are selected arithmetic cases, not observed OfficePress multiples or a pricing recommendation. Enterprise value must be reconciled with debt, cash, equity rights and dilution to discuss shareholder value.')
p('SaaS Capital uses current run rate revenue and excludes several mixed revenue models. A business with substantial implementation or perpetual licence revenue cannot simply apply a pure SaaS multiple to all sales. [S16]')

# 10
page('09 The market universe')
p('The requested audience is global English speaking small businesses. This research did not identify a harmonised official count for that exact category. The model therefore uses five measurable markets as a bounded starting proxy: the United States, United Kingdom, Canada, Australia and New Zealand. It does not estimate all English speaking buyers worldwide.')
image('market-counts.png','Figure 4  Employer business reference populations in five markets. Sources S1 to S5; reference years and definitions differ. Counts are not verified software buyers.')
table(['Market','Reference count','Period and coverage'],[
    ['United States','5.58 million','2023 BDS firms with 1 to 499 employees. [S1]'],
    ['United Kingdom','1.472 million','Start of 2026 employers, including large firms. [S2]'],
    ['Canada','1.10 million','December 2024 employer businesses, including large firms. [S3]'],
    ['Australia','996203','June 2026 employing businesses. [S4]'],
    ['New Zealand','161560','February 2026 enterprises with paid employees. [S5]'],
    ['Combined proxy','About 9.31 million','Rounded planning denominator, not harmonised global SME statistics.']
],[1.43,1.23,4.32])
h('Interpretation and exclusions')
p('Different definitions, reference years and possible multinational overlaps make the sum approximate. Canada includes buyers that may require French; other counts include firms outside the intended size range. Filters on the next page make these assumptions visible. Nonemployers and additional English speaking markets are excluded rather than treated as already reachable demand.')

# 11
page('10 TAM SAM and SOM model')
image('market.png','Figure 5  A scoped market model built from official counts and explicit commercial assumptions. TAM and SAM are annual spending potential; SOM is an illustrative year three recurring revenue outcome.')
table(['Layer','Calculation','Result'],[
    ['Scoped TAM','9.309763m employer reference businesses × USD1800 annual revenue per account','About USD16.76bn per year'],
    ['Assumed SAM','9.309763m × 20% industry fit × 25% team size fit × 60% language readiness and buying fit','About 279293 prospects; USD503m per year'],
    ['Base SOM','1200 paying accounts × USD1800 annual revenue per account','USD2.16m year three exit ARR; about 0.43% of assumed SAM']
],[1.15,4.12,1.71])
p('**TAM** is total addressable market within this defined five country scope. **SAM** is the assumed serviceable available market for the first package. **SOM** is a capacity constrained serviceable obtainable outcome over three commercial years. The broader global English language opportunity remains unquantified.')
h('The assumptions do the filtering')
p('USD1800 per year means USD150 per account per month. The three SAM factors are analyst assumptions, not survey results or independent probabilities. They need replacement with segment counts, technical eligibility and observed purchase behaviour. Applying them sequentially is a transparent planning shortcut, not statistical evidence.')
h('Sensitivity before confidence')
p('At USD900 to USD3000 annual account revenue, scoped TAM spans about USD8.38bn to USD27.93bn. At the base price, a 1% to 5% serviceability filter yields about USD168m to USD838m of SAM. These ranges show the effect of chosen inputs; they do not reduce uncertainty through additional evidence.')
note('Arithmetic and inputs are saved in research/model.json. One customer is one buying business account, not one seat, app, enterprise establishment or payment transaction. Count each account once; do not add app TAMs or multiply suite revenue by 30.')

# 12
page('11 Business model options')
p('The company control promise leaves commercial choices open. OfficePress can charge for reliable outcomes, managed operation, supported software or deployment services, but the rights, operating obligations and cost base must be explicit. The following are options, not accepted current offers. [P1]')
table(['Model option','Revenue mechanism','Main tradeoff'],[
    ['Managed workflow subscription','Recurring account package, with included users or capacity and transparent usage allowances.','Easy commercial evaluation, but OfficePress owns hosting, support and operational reliability.'],
    ['Customer controlled deployment','Annual supported software or update subscription; customer or partner operates its environment.','Fits control preference; fragmented versions and support complexity can hurt margins.'],
    ['Partner delivered suite','Partner implementation and managed services; OfficePress licence, support or platform subscription.','Leverages local expertise but needs training, quality control and channel margin.'],
    ['Open core or free entry','Free selected capability with paid operation, support or enterprise extensions.','Distribution benefit is possible; licence and conversion design must be chosen deliberately.'],
    ['Usage and transactions','Meter provider intensive AI, storage or messaging; optional payment or marketplace participation.','Aligns variable costs, but creates predictability, regulatory and dependence concerns.']
],[1.64,2.79,2.55])
h('Recommended first commercial experiment')
p('Offer one managed workflow package with a defined onboarding scope. Test two recurring price points with comparable prospects, while separately pricing implementation and metered provider usage. For buyers with a clear deployment need, test a supported customer controlled option; do not promise it before operational validation.')
h('Illustrative packaging for interviews')
p('Use USD79 per account/month as a small entry package, USD149 for the target workflow package and USD299 for a larger operations package, with proposed included users and usage established during interviews. These are test cards, not published prices. The financial model rounds the target package to USD150. Avoid an unlimited all apps promise while the support burden is unknown.')
h('Revenue quality rules')
p('Separate subscription revenue, one time implementation, partner pass through and variable usage. Only contracted recurring subscription value belongs in the modelled ARR. AI usage should have visible spend limits and measured gross margin; customer infrastructure spend is not automatically OfficePress revenue.')

# 13
page('12 Unit economics and delivery cost')
p('The illustrative unit below tests whether a USD150 monthly customer can support the delivery model. Every cost is an assumption that must be measured in pilots; it is not an OfficePress cost observation or an industry benchmark.')
image('unit-economics.png','Figure 6  Illustrative monthly unit economics in USD per account. Gross profit is revenue less the four cost categories; bars are not additive revenue streams. Source research/model.json.')
table(['Monthly item','Assumption','Treatment'],[
    ['Subscription revenue','USD150','Single account; excludes taxes and implementation.'],
    ['Direct delivery costs','USD40','Infrastructure 12; AI and providers 8; variable support 15; payments and other 5.'],
    ['Gross profit','USD110','73.3% illustrative gross margin, before fixed payroll and overhead.'],
    ['CAC payback at USD600','5.5 months','600 / 110; fully loaded customer acquisition cost.'],
    ['CAC payback at USD1200','10.9 months','1200 / 110; onboarding losses must also be recovered.'],
    ['CAC payback at USD2400','21.8 months','2400 / 110; may be unattractive without strong retention and runway.']
],[2.0,1.35,3.63])
h('Where the model can break')
p('A further USD30 of support or provider cost reduces gross profit to USD80, margin to 53.3% and USD1200 CAC payback to 15 months. Low priced accounts with bespoke integrations can destroy otherwise attractive subscription economics. Price setup separately and enforce a supportable scope.')
h('Measure costs honestly')
p('Include the founder time used for onboarding, presales and customer support in fully loaded delivery or acquisition cost. Report gross retention and expansion separately. Do not claim lifetime value from an unobserved churn rate; the simple revenue scenarios assume 10% annual logo churn only for acquisition planning.')

# 14
page('13 Three year commercial scenarios')
p('The model assumes zero paying accounts at commercial launch and USD150 monthly revenue per account. It excludes the six founder reported free deployments at Shoppable Business, which are one pilot organisation rather than six paid accounts. This is a forecast baseline, not a claim about company wide paid customer totals. Conversion data and a commercial launch date remain undisclosed. [P5]')
image('arr-scenarios.png','Figure 7  Illustrative year end ARR under three customer count scenarios. ARR is a run rate and differs from revenue recognised during the year. Source research/model.json.')
table(['Scenario','Year one accounts and ARR','Year two accounts and ARR','Year three accounts and ARR'],[
    ['Cautious','50 / USD90000','150 / USD270000','400 / USD720000'],
    ['Base','100 / USD180000','400 / USD720000','1200 / USD2.16m'],
    ['Expansion','150 / USD270000','800 / USD1.44m','3000 / USD5.40m']
],[1.05,1.98,1.98,1.97])
h('Revenue is not the exit run rate')
p('A linear average of beginning and ending accounts gives base subscription revenue of USD90000, USD450000 and USD1.44 million in years one, two and three. It excludes setup fees, metered usage and taxes. A monthly cohort and cash collection model is required before a funding decision.')
h('What the base case requires')
p('At 10% annual logo churn, year three begins with 400 customers, retains 360 and must add 840 to finish at 1200: an average of 70 gross additions per month. A purely sales assisted channel at 20% qualified demo conversion would require 350 qualified demos each month. These assumptions are demanding and must be reconciled with staffing and onboarding capacity.')
note('At USD110 monthly gross profit and USD50000 fixed monthly overhead, approximately 455 active accounts cover fixed overhead before new customer acquisition, onboarding losses, taxes and financing. This is a contribution threshold, not a forecast of company break even.')

# 15
page('14 Go to market and expansion')
p('**Proposed entry:** one workflow for English speaking service businesses with 5 to 50 people, starting in one or two reachable markets. Global availability is not a substitute for focus. Choose the first geography from founder access, payments, support coverage and customer evidence rather than the largest population alone.')
table(['Stage','Channel and offer','Decision metric'],[
    ['Discover','Review Shoppable pilot workflows and interview independent prospects.','Pilot outcomes, repeated pain, buyer authority and deployment constraints.'],
    ['Pilot','Paid, fixed scope implementation of one workflow.','Activation time, successful work completion, setup effort and recurring willingness to pay.'],
    ['Repeat','Customer references, workflow content and targeted outbound.','Conversion by source, fully loaded CAC, support cost and retention.'],
    ['Extend','Accountants, operations consultants and managed service partners where appropriate.','Partner sourced activation quality, economics and retained customers.'],
    ['Expand','Add a second adjacent app or workflow to successful accounts.','Expansion without greater support cost than incremental gross profit.']
],[1.0,3.35,2.63])
h('Sell a workflow that can be demonstrated')
p('A request should become owned work with a next action, a relevant record and a visible result. Use that scenario in discovery, onboarding, product education and competitive testing. The customer should be able to explain why OfficePress remains useful alongside email or accounting software already in place.')
h('A plausible capacity bridge')
p('One illustrative route to the base year three acquisition rate is 15 productive partners contributing two new accounts per month, plus 40 direct additions. The direct component would need about 200 qualified demos monthly at 20% conversion. This is a workload model to test, not a partner pipeline or a committed sales plan.')
h('International expansion gates')
p('Before adding markets, verify contracts, tax handling, payments, time zones, support, integrations and language requirements. Accounting, signing, HR and payments can carry market specific obligations; include their validation cost in the roadmap. No certification or jurisdictional compliance claim is established by this briefing.')

# 16
page('15 Roadmap tied to evidence')
p('The suite vision should guide architecture while customer evidence governs release order. Do not fund 30 simultaneous product launches. The phases below are a proposed operating plan; timing depends on the current team, readiness audit and available cash.')
table(['Phase','Deliverable','Proposed evidence gate'],[
    ['First 30 days','Measure the six Shoppable pilots; audit supported scope; interview independent prospects and test two packages.','Pilot usage baseline and outcomes; at least 15 buyer interviews; founder and CEO decision charter.'],
    ['Days 31 to 90','Turn pilot learning into a narrow paid package and reproducible onboarding.','Proposed target of five independent paying design partners; measured setup and provider costs.'],
    ['Months 4 to 6','Stabilise the package and test repeatable acquisition.','A 20 to 50 account cohort; renewal intent and observed use; explicit reliability and recovery checks.'],
    ['Months 7 to 12','Add an adjacent workflow only when it improves customer outcomes.','Cohort retention, support margin and expansion behaviour support further investment.'],
    ['Following 12 to 24 months','Replicate a proven package through channels and selectively deepen the suite.','Repeatable channel CAC, retained usage, onboarding capacity and funded operational ownership.']
],[1.25,2.85,2.88])
h('Metrics that should govern the programme')
p('Track time to first completed workflow, weekly active buying accounts, recurring work completed, trial to paid conversion, retained paid accounts, gross revenue retention, net revenue retention, support time, provider spend and acquisition payback. Report sample size and cohort age. A team logging in is weaker evidence than a team repeatedly finishing valuable work.')
h('Stop or narrow conditions')
p('Change the segment or package if discovery does not produce recurring paid problems, pilots require bespoke engineering to become useful, customers do not return to the workflow, or delivery cost exceeds a credible price. A broad catalogue should not prevent closing an unconvincing product experiment.')
h('Readiness before expansion')
p('For each sold workflow, assign an owner for permissions, backup and restoration, migrations, release support, external provider failures and incident communication. The shared proofs are implementation examples with limits, not an operating SLA for the suite. [P3]')

# 17
page('16 CEO mandate and operating model')
p('The prospective CEO should be evaluated as an operator who can turn a product portfolio into a focused business. The role needs explicit authority, a working partnership with the founder and agreed evidence for the next funding decision.')
table(['Accountability','CEO deliverable','Founder or technical counterpart'],[
    ['Commercial focus','Select target buyer, first package, pricing tests and channel priorities.','Confirm product feasibility and scope tradeoffs.'],
    ['Product allocation','Prioritise a small number of customer outcomes and stop low evidence work.','Own architecture quality, estimates and delivery transparency.'],
    ['Economics and cash','Maintain a monthly cash plan, cohort metrics, cost allocation and hiring plan.','Expose infrastructure, provider and maintenance costs.'],
    ['Customer operation','Own onboarding, customer success, escalation and partner standards.','Provide reliable release, recovery and integration practices.'],
    ['Capital and governance','Prepare diligence, investor communication, cap table and governance proposals.','Document IP ownership, contribution and technical dependencies.']
],[1.43,2.83,2.72])
h('A proposed first ninety day scorecard')
p('Document the six Shoppable pilots, usage and outcomes; verify supported product scope; choose a workflow package; and test it with independent buyers. A proposed ninety day goal is five independent paying design partners, measured onboarding economics and a costed pre-seed operating plan. Report what prevented conversion if the goal is not met. [P5]')
h('Agree the founder relationship before appointment')
p('Specify decision rights, reporting, full time commitment, compensation, equity and vesting, reserved matters and how disagreements are resolved. Define which founder responsibilities continue and which move to the CEO. These terms require negotiation; no offer or equity allocation is implied here.')
h('What to look for in the candidate')
p('Prior evidence of selling and retaining SMB software customers, simplifying product scope, building economical onboarding and operating a disciplined cash plan. The immediate need is someone who can learn from a small paid cohort and create a repeatable organisation around it.')

# 18
page('17 Capital planning and investment conditions')
p('The funding request cannot be calculated responsibly from app count or headline comparable valuations. Establish opening cash, obligations, salaries, planned hiring and operating scope first. Model fixed operating costs, direct delivery costs and cash collections separately; fund the next evidence gates.')
table(['Illustrative case','Monthly fixed operating cash cost','Eighteen months plus 15 percent contingency'],[
    ['Lean validation team','USD 35,000','USD 724,500'],
    ['Focused product and commercial team','USD 65,000','USD 1,345,500'],
    ['Broader delivery organisation','USD 100,000','USD 2,070,000']
],[2.55,1.8,2.63])
note('These are fixed operating budget scenarios, not an OfficePress raise recommendation. Formula: monthly fixed operating cash cost × 18 × 1.15. Required new cash then adds one off obligations and a minimum cash reserve, and subtracts unrestricted opening cash and credible cash contribution after direct delivery costs. Keep costs in one category only; reconcile payment timing, working capital and tax in a monthly cash model.')
h('What the first capital should buy')
p('For this pre-seed stage, turn the active Shoppable pilots into documented usage and outcome evidence, close the gaps in one repeatable package, and acquire independent paying customers. Fund reliable onboarding, measured unit economics and a supported delivery model before broad expansion. [P5]')
h('Conditions before setting a financing price')
p('Complete IP and third party licence diligence; reconcile the cap table; validate revenue and liabilities; identify the supported release scope; review customer and data obligations; and build a monthly downside cash model. Negotiate ownership and investor rights against milestones and risk, rather than borrowing a mature company multiple.')
h('Potential paths')
p('The current stage is pre-seed; prior capital raised and the amount sought were not supplied. A pre-seed round could finance the move from active free pilots to repeatable paid adoption. A later seed round should depend on cohorts and channel economics. Partner delivered services remain an alternative, with a different margin profile. [P5]')

# 19
page('18 Risks and decisions before circulation')
table(['Risk','Why it matters','Proposed response'],[
    ['Portfolio sprawl','Broad scope can dilute delivery and commercial focus.','Prioritise one workflow; publish truthful availability and ownership.'],
    ['Pilot concentration','All reported pilot use is at one organisation and is free.','Measure real use and obtain independent paying customer evidence. [P5]'],
    ['Strong incumbents','Broad suites and controllable deployments already exist.','Win a measurable use case with verified total cost and onboarding.'],
    ['Operational burden','Hosting choice, customer environments and integrations can create high support cost.','Choose supported configurations and test release and recovery procedures.'],
    ['AI economics and trust','Provider cost, failure and permission mistakes can harm value.','Meter usage, require appropriate review, log actions and test boundaries.'],
    ['Switching friction','Customers may not migrate even when the concept is appealing.','Pilot alongside existing tools and prove a short path to useful work.'],
    ['Revenue quality','Services and custom work can obscure weak subscription economics.','Report revenue streams and cohort margins separately.'],
    ['Market and regulatory scope','English language does not eliminate local financial or data requirements.','Select initial markets and validate obligations before making claims.']
],[1.4,2.75,2.83])
h('Company information still needed')
p('Retain the founder reported pilot baseline and add start dates, active users, workflow volumes, outcomes and operating costs. Complete legal entity, team, IP ownership, supported releases, contracts, company wide revenue and paying customer totals, cash, cap table, prior funding and the pre-seed request. Undisclosed figures are not assumed to be zero. [P5]')
h('Decisions for the investor and prospective CEO')
p('Agree the first customer segment, workflow package and geography; specify the control promise and supported deployment; choose two price tests; establish a ninety day budget and scorecard; then decide which evidence would justify further capital. Keep the remaining catalogue as sequenced expansion options.')
note('Research discipline: vendor pages are commercial claims; transaction releases describe specific historical events; official business statistics are not demand studies. No customer interviews, independent product audit or private company financial review was performed for this briefing.')

# 20 and 21
for idx,group in enumerate([SOURCES[:11],SOURCES[11:]]):
    page('19 Sources and methodology' if idx==0 else '20 Sources and research notes')
    if idx==0:
        p('Online research was consulted on 13 November 2026; project sources were read at d8ade68. P5 records the subsequent founder clarification: pre-seed, six active free pilots at Shoppable Business. That usage is attributed to the founder, not independently audited. Uncited strategy and forecast inputs remain proposals.')
    for source in group:
        para=doc.add_paragraph()
        para.paragraph_format.space_after=Pt(3)
        r=para.add_run(source['id']+'  '); r.bold=True; r.font.size=Pt(10)
        if source['url'].startswith('http'):
            hyperlink(para,source['title'],source['url'])
        else:
            r=para.add_run(source['title']); r.bold=True; r.font.size=Pt(10)
        note(source['type']+' | '+source['date']+'. '+source['note'])
        transcript.append(source['id']+' '+source['title']+' '+source['url'])
    if idx==1:
        h('Reproducibility and boundaries')
        note('research/sources.json preserves URLs and claim notes; pilot-update.json preserves the founder statement and six supplied URLs; model.json separates that baseline from forecast assumptions. Figures 1, 2, 3 and 6 are original explanatory diagrams; Figures 5, 7 and 8 chart cited populations or scenarios. Figure 4 is supplied design material, not a pilot screenshot.')
        note('The document deliberately does not calculate an OfficePress valuation, declare production readiness, claim regulatory compliance, combine overlapping app markets, or count customers per app. Source quality, differing country definitions, outdated reference years and untested commercial filters remain material limitations.')

output=HERE/'OfficePress_Product_and_Investment_Brief.docx'
doc.save(output)
(HERE/'research/manuscript.md').write_text('\n\n'.join(transcript)+'\n')
(HERE/'qa/build-summary.json').write_text(json.dumps({'output':output.name,'planned_pages':len(page_names),
    'page_titles':page_names,'paragraphs':len(doc.paragraphs),'tables':len(doc.tables),
    'embedded_images':len(doc.inline_shapes),'sha256':hashlib.sha256(output.read_bytes()).hexdigest()},indent=2)+'\n')
print(json.dumps({'output':str(output),'planned_pages':len(page_names),'images':len(doc.inline_shapes),'bytes':output.stat().st_size}))
