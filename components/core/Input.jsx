import React from 'react';

const STYLE_ID = 'os-input-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-field{ display:flex; flex-direction:column; gap:var(--space-2); font-family:var(--font-body); }
  .os-field__label{ font-family:var(--font-heading); font-weight:600; font-size:var(--text-sm);
    text-transform:uppercase; letter-spacing:.04em; color:var(--text-strong); }
  .os-field__req{ color:var(--color-primary); margin-left:.25em; }
  .os-input{
    font-family:var(--font-body); font-size:var(--text-md); color:var(--text-strong);
    background:var(--surface-page); border:var(--border-width) solid var(--border-strong);
    border-radius:var(--radius-md); padding:.7rem .85rem; width:100%; line-height:1.3;
    transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
  }
  .os-input::placeholder{ color:var(--text-faint); }
  .os-input:hover{ border-color:var(--gray-400); }
  .os-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
  textarea.os-input{ resize:vertical; min-height:120px; }
  .os-field--invalid .os-input{ border-color:var(--color-primary); }
  .os-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
  .os-field--invalid .os-field__hint{ color:var(--color-primary); }
  `;
  document.head.appendChild(el);
}

export function Input({
  label,
  required = false,
  hint,
  invalid = false,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const fid = id || (label ? 'os-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div className={['os-field', invalid ? 'os-field--invalid' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="os-field__label" htmlFor={fid}>
          {label}{required && <span className="os-field__req">*</span>}
        </label>
      )}
      <Tag id={fid} className="os-input" aria-invalid={invalid || undefined} {...rest} />
      {hint && <span className="os-field__hint">{hint}</span>}
    </div>
  );
}
