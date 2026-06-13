import React from 'react';

const STYLE_ID = 'os-statuspill-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-status{
    display:inline-flex; align-items:center; gap:.5em;
    font-family:var(--font-heading); font-weight:700; text-transform:uppercase;
    letter-spacing:.05em; font-size:var(--text-xs); line-height:1;
    padding:.45em .75em .45em .6em; border-radius:var(--radius-pill);
    border:var(--border-width) solid transparent;
  }
  .os-status__dot{ width:.6em; height:.6em; border-radius:50%; background:currentColor; flex:none; }
  .os-status--armed{ background:var(--status-armed-bg); color:var(--status-armed); }
  .os-status--secure{ background:var(--status-secure-bg); color:var(--status-secure); }
  .os-status--warning{ background:var(--status-warning-bg); color:var(--status-warning); }
  .os-status--offline{ background:var(--status-offline-bg); color:var(--gray-600); }
  .os-status--armed .os-status__dot{ animation:os-pulse 1.4s var(--ease-standard) infinite; }
  @keyframes os-pulse{ 0%,100%{ opacity:1 } 50%{ opacity:.35 } }
  @media (prefers-reduced-motion: reduce){ .os-status--armed .os-status__dot{ animation:none } }
  `;
  document.head.appendChild(el);
}

const LABELS = { armed: 'Armed', secure: 'Secure', warning: 'Trouble', offline: 'Offline' };

export function StatusPill({ status = 'secure', children, className = '', ...rest }) {
  useStyles();
  const cls = ['os-status', `os-status--${status}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      <span className="os-status__dot" />
      {children || LABELS[status]}
    </span>
  );
}
