//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Caller } from '../auth/types.js';
import type { ChatService, Conversation } from './types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Populate repeatable chat data for this disposable proof app.
 */
export async function seed(
  server: HttpServer<import('../app/types.js').Config>,
  owner: Caller
) {
  const chat = server.plugin<ChatService>('chat');
  if (!chat) return;
  for (const [ index, contact, subject, channel ] of [
    [ '2042', 'Lina Reyes', 'Request for delivery quotation', 'email' ],
    [ '2043', 'Paolo Tan', 'Return label expired', 'whatsapp' ],
    [ '2039', 'Maria Castillo', 'Where is order ORD-24081?', 'messenger' ],
    [ '2031', 'Juan Bautista', 'Change delivery address', 'viber' ]
  ] as const) {
    const at = new Date(Date.now() - 3600000).toISOString();
    const messages: Conversation['messages'] = [
      {
        id: `${index}-1`,
        kind: 'incoming',
        author: contact,
        body:
          index === '2042'
            ? 'Hi Support team, we’re preparing our September restock and need a delivery quotation for the attached purchase order. Please quote standard and express.'
            : 'Hello, could you help with this request?',
        at
      }
    ];
    if (index === '2042')
      messages[0].attachments = [
        {
          id: 'purchase-order',
          name: 'purchase-order-4821.csv',
          type: 'text/csv',
          content: Buffer.from('Item,Quantity\nShipping carton,48\n').toString(
            'base64'
          )
        }
      ];
    await chat.create(owner, {
      id: index,
      revision: 0,
      contact,
      company: 'Northwind Supply',
      subject,
      channel,
      status: 'Open',
      priority: index === '2042' ? 'High' : 'Normal',
      department: 'Logistics',
      assignee: owner.name,
      access: [ '*' ],
      messages,
      updated: at
    });
  }
};

/**
 * Adds only missing request examples; existing conversations and decisions
 * survive reruns.
 */
export async function seedRequests(
  server: HttpServer<import('../app/types.js').Config>,
  owner: Caller
) {
  const chat = server.plugin<ChatService>('chat');
  if (!chat) return;
  for (const [ id, contact, senderAddress, company, subject, body ] of [
    [
      'request-stock',
      'Rina Delgado',
      'rina@vendor.example',
      'Vendor Supply',
      'Paper stock quotation',
      'Good morning,\n\nWe can supply the paper stock your team requested. Would you like a quotation for twenty reams, including delivery?\n\nRina'
    ],
    [
      'request-recruiting',
      'Talent Hub',
      'recruiting@talent.example',
      'Talent Hub',
      'Press operator candidates',
      'Hello,\n\nWe have two experienced press operators available for interviews next week. Let us know if your team is still hiring.'
    ],
    [
      'request-building',
      'Building Administration',
      'notices@building.example',
      'Building Administration',
      'Scheduled water interruption',
      'Good morning,\n\nWater service will pause from 9am to noon on Friday while the maintenance team replaces a valve. Please inform your team.'
    ]
  ]) {
    try {
      await chat.read(owner, id);
      continue;
    } catch (error) {
      if (!(error instanceof Error) || !('code' in error) || error.code !== 404)
        throw error;
    }
    const at = new Date().toISOString();
    await chat.create(owner, {
      id,
      revision: 0,
      inbox: 'requests',
      contact,
      senderAddress,
      company,
      subject,
      channel: 'email',
      status: 'New',
      priority: 'Normal',
      department: '',
      assignee: '',
      access: [ '*' ],
      messages: [
        { id: `${id}-1`, kind: 'incoming', author: contact, body, at }
      ],
      updated: at
    });
  }
};
