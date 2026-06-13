import React from 'react';

const STYLE_ID = 'os-eyebrow-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-eyebrow{
    display:inline-flex; align-items:center; gap:.6em;
    font-family:var(--font-heading); font-weight:700; text-transform:uppercase;
    letter-spacing:var(--tracking-eyebrow); font-size:var(--text-sm);
    color:var(--color-primary); line-height:1;
  }
  .os-eyebrow::before{ content:""; width:24px; height:3px; background:currentColor; flex:none; }
  .os-eyebrow--bare::before{ display:none; }
  .os-eyebrow--inverse{ color:var(--white); }
  `;
  document.head.appendChild(el);
}

export function Eyebrow({ rule = true, inverse = false, className = '', children, ...rest }) {
  useStyles();
  const cls = [
    'os-eyebrow',
    rule ? '' : 'os-eyebrow--bare',
    inverse ? 'os-eyebrow--inverse' : '',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
