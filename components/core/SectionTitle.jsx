import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

const STYLE_ID = 'os-sectiontitle-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-sectiontitle{ display:flex; flex-direction:column; gap:var(--space-3); }
  .os-sectiontitle--center{ align-items:center; text-align:center; }
  .os-sectiontitle__h{ font-family:var(--font-heading); font-weight:700; color:var(--text-strong);
    line-height:var(--leading-snug); margin:0; font-size:var(--text-3xl); }
  .os-sectiontitle--inverse .os-sectiontitle__h{ color:var(--white); }
  .os-sectiontitle__rule{ width:56px; height:var(--border-accent); background:var(--color-primary); border:0; margin:0; }
  .os-sectiontitle__sub{ font-family:var(--font-body); font-size:var(--text-lg); color:var(--text-muted);
    margin:0; max-width:60ch; line-height:var(--leading-normal); }
  .os-sectiontitle--inverse .os-sectiontitle__sub{ color:var(--gray-300); }
  `;
  document.head.appendChild(el);
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  inverse = false,
  rule = true,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = [
    'os-sectiontitle',
    align === 'center' ? 'os-sectiontitle--center' : '',
    inverse ? 'os-sectiontitle--inverse' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <Eyebrow rule={align !== 'center'} inverse={inverse}>{eyebrow}</Eyebrow>}
      {title && <h2 className="os-sectiontitle__h">{title}</h2>}
      {rule && !eyebrow && <hr className="os-sectiontitle__rule" />}
      {subtitle && <p className="os-sectiontitle__sub">{subtitle}</p>}
    </div>
  );
}
