import React from 'react';

const STYLE_ID = 'os-badge-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-badge{
    display:inline-flex; align-items:center; gap:.4em;
    font-family:var(--font-heading); font-weight:700; text-transform:uppercase;
    letter-spacing:.06em; font-size:var(--text-2xs); line-height:1;
    padding:.45em .7em; border-radius:var(--radius-sm);
    border:var(--border-width) solid transparent; white-space:nowrap;
  }
  .os-badge svg{ width:1.1em; height:1.1em; }
  .os-badge--solid{ background:var(--color-primary); color:var(--color-on-primary); }
  .os-badge--outline{ background:transparent; color:var(--text-strong); border-color:var(--border-strong); }
  .os-badge--soft{ background:var(--red-50); color:var(--red-700); }
  .os-badge--neutral{ background:var(--gray-100); color:var(--gray-700); }
  .os-badge--dark{ background:var(--gray-900); color:var(--white); }
  `;
  document.head.appendChild(el);
}

export function Badge({ tone = 'outline', icon = null, className = '', children, ...rest }) {
  useStyles();
  const cls = ['os-badge', `os-badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {icon}
      {children}
    </span>
  );
}
