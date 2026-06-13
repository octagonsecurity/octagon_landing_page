import React from 'react';

/* Inject component CSS once. */
const STYLE_ID = 'os-button-styles';
function useButtonStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-btn{
    --_bg:var(--color-primary); --_fg:var(--color-on-primary); --_bd:transparent;
    display:inline-flex; align-items:center; justify-content:center; gap:.55em;
    font-family:var(--font-heading); font-weight:700; text-transform:uppercase;
    letter-spacing:.04em; line-height:1; white-space:nowrap; cursor:pointer;
    border:var(--border-width-strong) solid var(--_bd); border-radius:var(--radius-md);
    background:var(--_bg); color:var(--_fg); text-decoration:none;
    transition:background var(--dur-fast) var(--ease-standard),
               transform var(--dur-fast) var(--ease-standard),
               box-shadow var(--dur-fast) var(--ease-standard);
  }
  .os-btn--sm{ font-size:var(--text-xs); padding:.5rem .85rem; }
  .os-btn--md{ font-size:var(--text-sm); padding:.7rem 1.25rem; }
  .os-btn--lg{ font-size:var(--text-md); padding:.95rem 1.75rem; }
  .os-btn--block{ display:flex; width:100%; }
  .os-btn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
  .os-btn:active{ transform:translateY(1px) scale(.99); }

  .os-btn--primary{ --_bg:var(--color-primary); --_fg:var(--color-on-primary); }
  .os-btn--primary:hover{ --_bg:var(--color-primary-hover); }
  .os-btn--primary:active{ --_bg:var(--color-primary-active); }

  .os-btn--secondary{ --_bg:transparent; --_fg:var(--text-strong); --_bd:var(--border-strong); }
  .os-btn--secondary:hover{ --_bg:var(--gray-50); --_bd:var(--gray-400); }

  .os-btn--dark{ --_bg:var(--gray-900); --_fg:var(--white); }
  .os-btn--dark:hover{ --_bg:var(--black); }

  .os-btn--ghost{ --_bg:transparent; --_fg:var(--color-primary); --_bd:transparent; padding-left:.5rem; padding-right:.5rem; }
  .os-btn--ghost:hover{ --_bg:var(--red-50); }

  .os-btn[disabled], .os-btn[aria-disabled="true"]{
    opacity:.45; pointer-events:none; cursor:not-allowed;
  }
  .os-btn svg{ width:1.15em; height:1.15em; }
  `;
  document.head.appendChild(el);
}

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  useButtonStyles();
  const cls = [
    'os-btn',
    `os-btn--${variant}`,
    `os-btn--${size}`,
    block ? 'os-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} {...rest}>{content}</a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} {...rest}>{content}</button>
  );
}
