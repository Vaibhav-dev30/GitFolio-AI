import './Card.css';

export function Card({ title, content, footer, className = '' }) {
  const headerHtml = title ? `
    <div class="card-header">
      <h3 class="card-title">${title}</h3>
    </div>
  ` : '';

  const footerHtml = footer ? `
    <div class="card-footer">
      ${footer}
    </div>
  ` : '';

  return `
    <div class="card ${className}">
      ${headerHtml}
      <div class="card-body">
        ${content}
      </div>
      ${footerHtml}
    </div>
  `;
}
