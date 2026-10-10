//modules
import type { Token, Tokens } from 'marked';
import type { ReactNode } from 'react';
import { marked } from 'marked';

//--------------------------------------------------------------------//
// Types

//only these fields are interpreted; unknown extensions render their raw
// text
type RenderToken = Token & {
  tokens?: Token[],
  text?: string,
  href: string,
  ordered?: boolean,
  start?: number,
  items: Tokens.ListItem[]
};

//--------------------------------------------------------------------//
// Components

/**
 * Render publisher Markdown as React nodes, keeping raw HTML inert and
 * allowing only HTTP(S) links in the upgrade instructions.
 */
export function Markdown({ text }: { text: string }) {
  //render supported Markdown tokens as React nodes while leaving raw HTML
  // inert
  function handleRender(tokens: Token[] = []): ReactNode[] {
    //map only supported tokens to React nodes; React escapes raw text and
    // HTML
    return tokens.map((token: Token, tokenIndex: number) => {
      const renderToken = token as RenderToken;
      switch (renderToken.type) {
        case 'heading':
          return (
            <h3 key={tokenIndex}>{handleRender(renderToken.tokens || [])}</h3>
          );
        case 'paragraph':
          return (
            <p key={tokenIndex}>{handleRender(renderToken.tokens || [])}</p>
          );
        case 'text':
          return (
            <span key={tokenIndex}>
              {renderToken.tokens
                ? handleRender(renderToken.tokens)
                : renderToken.text}
            </span>
          );
        case 'strong':
          return (
            <strong key={tokenIndex}>
              {handleRender(renderToken.tokens || [])}
            </strong>
          );
        case 'em':
          return (
            <em key={tokenIndex}>{handleRender(renderToken.tokens || [])}</em>
          );
        case 'code':
          return (
            <pre key={tokenIndex}>
              <code>{renderToken.text}</code>
            </pre>
          );
        case 'codespan':
          return (<code key={tokenIndex}>{renderToken.text}</code>);
        //only HTTP(S) destinations become links; unsupported protocols stay
        // inert text
        case 'link':
          return /^https?:\/\//.test(renderToken.href) ? (
            <a
              key={tokenIndex}
              href={renderToken.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {handleRender(renderToken.tokens)}
            </a>
          ) : (
            <span key={tokenIndex}>{handleRender(renderToken.tokens)}</span>
          );
        case 'list':
          return renderToken.ordered ? (
            <ol key={tokenIndex} start={renderToken.start}>
              {renderToken.items.map(
                (listItem: Tokens.ListItem, itemIndex: number) => (
                  <li key={itemIndex}>{handleRender(listItem.tokens)}</li>
                )
              )}
            </ol>
          ) : (
            <ul key={tokenIndex}>
              {renderToken.items.map(
                (listItem: Tokens.ListItem, itemIndex: number) => (
                  <li key={itemIndex}>{handleRender(listItem.tokens)}</li>
                )
              )}
            </ul>
          );
        case 'blockquote':
          return (
            <blockquote key={tokenIndex}>
              {handleRender(renderToken.tokens)}
            </blockquote>
          );
        case 'space':
          return null;
        //leave extension tokens as escaped text instead of executing
        // embedded markup
        default:
          return (<span key={tokenIndex}>{renderToken.raw}</span>);
      }
    });
  }
  return (<div className="markdown">{handleRender(marked.lexer(text))}</div>);
};
