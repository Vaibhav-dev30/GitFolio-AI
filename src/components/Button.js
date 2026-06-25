import './Button.css';

export function Button({ text, variant = 'primary', onClick, icon, href }) {
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';
  
  const iconHtml = icon ? `<span class="btn-icon">${icon}</span>` : '';
  
  return `
    <${Tag} class="btn btn-${variant}" ${isLink ? `href="${href}"` : ''} ${onClick ? `onclick="${onClick}"` : ''}>
      ${iconHtml}
      ${text}
    </${Tag}>
  `;
}
