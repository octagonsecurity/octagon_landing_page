import React from 'react';

const STYLE_ID = 'os-iconbutton-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-iconbtn{
    --_bg:transparent; --_fg:var(--text-strong); --_bd:var(--border-strong);
    display:inline-flex; align-items:center; justify-content:center;
    background:var(--_bg); color:var(--_fg);
    border:var(--border-width) solid var(--_bd); border-radius:var(--radius-md);
    cursor:pointer; transition:background var(--dur-fast) var(--ease-standard),
      border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
  }
  .os-iconbtn--sm{ width:34px; height:34px; }
  .os-iconbtn--md{ width:42px; height:42px; }
  .os-iconbtn--lg{ width:50px; height:50px; }
  .os-iconbtn--sm svg{ width:18px; height:18px; }
  .os-iconbtn--md svg{ width:20px; height:20px; }
  .os-iconbtn--lg svg{ width:24px; height:24px; }
  .os-iconbtn:hover{ --_bg:var(--gray-50); --_bd:var(--gray-400); }
  .os-iconbtn:active{ transform:scale(.94); }
  .os-iconbtn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
  .os-iconbtn--primary{ --_bg:var(--color-primary); --_fg:var(--color-on-primary); --_bd:transparent; }
  .os-iconbtn--primary:hover{ --_bg:var(--color-primary-hover); }
  .os-iconbtn--dark{ --_bg:var(--gray-900); --_fg:var(--white); --_bd:transparent; }
  .os-iconbtn--dark:hover{ --_bg:var(--black); }
  .os-iconbtn[disabled]{ opacity:.45; pointer-events:none; }
  `;
  document.head.appendChild(el);
}

export function IconButton({
  variant = 'secondary',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['os-iconbtn', `os-iconbtn--${variant}`, `os-iconbtn--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
