import React from 'react';

const STYLE_ID = 'os-card-styles';
function useStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .os-card{
    background:var(--surface-card); border:var(--border-width) solid var(--border-default);
    border-radius:var(--radius-md); box-shadow:var(--shadow-sm); overflow:hidden;
    display:flex; flex-direction:column;
    transition:box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
  }
  .os-card--accent{ border-top:var(--border-accent) solid var(--color-primary); }
  .os-card--interactive{ cursor:pointer; }
  .os-card--interactive:hover{ box-shadow:var(--shadow-md); transform:translateY(-2px); }
  .os-card__media, picture.os-card__media{ aspect-ratio:16/10; width:100%; display:block; background:var(--gray-100); overflow:hidden; }
  .os-card__media img, picture.os-card__media img{ width:100%; height:100%; object-fit:cover; display:block; }
  .os-card__body{ padding:var(--space-5); display:flex; flex-direction:column; gap:var(--space-2); flex:1; }
  .os-card__title{ font-family:var(--font-heading); font-weight:700; font-size:var(--text-xl); color:var(--text-strong); margin:0; line-height:var(--leading-snug); }
  .os-card__text{ font-family:var(--font-body); font-size:var(--text-sm); color:var(--text-body); margin:0; line-height:var(--leading-normal); }
  .os-card__footer{ margin-top:auto; padding-top:var(--space-3); }
  `;
  document.head.appendChild(el);
}

function webpSrc(src) {
  return src && /\.(png|jpe?g)$/i.test(src) ? src.replace(/\.(png|jpe?g)$/i, '.webp') : null;
}

function CardMedia({ src, alt }) {
  const webp = webpSrc(src);
  if (!webp) {
    return <img className="os-card__media" src={src} alt={alt} loading="lazy" decoding="async" />;
  }
  return (
    <picture className="os-card__media">
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </picture>
  );
}

export function Card({
  image,
  imageAlt = '',
  title,
  accent = false,
  interactive = false,
  footer = null,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = [
    'os-card',
    accent ? 'os-card--accent' : '',
    interactive ? 'os-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {image && <CardMedia src={image} alt={imageAlt} />}
      <div className="os-card__body">
        {title && <h3 className="os-card__title">{title}</h3>}
        {children && <div className="os-card__text">{children}</div>}
        {footer && <div className="os-card__footer">{footer}</div>}
      </div>
    </div>
  );
}
