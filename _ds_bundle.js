/* @ds-bundle: {"format":3,"namespace":"OctagonSecurityDesignSystem_9e6033","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"49a291728275","components/core/Button.jsx":"cd05f94d0234","components/core/Card.jsx":"d54b34d9f30b","components/core/Eyebrow.jsx":"ec1e010b3ecc","components/core/IconButton.jsx":"d07fdd32fc1d","components/core/Input.jsx":"145a875cf93e","components/core/SectionTitle.jsx":"0367e9ca4bc2","components/core/StatusPill.jsx":"a1bb33cc19fe","image-slot.js":"9309434cb09c","ui_kits/website/ClientLogos.jsx":"4898b17f361e","ui_kits/website/ContactForm.jsx":"2d6bdfecbe7b","ui_kits/website/CtaBand.jsx":"b0f2ac23be36","ui_kits/website/Footer.jsx":"5adf63df615a","ui_kits/website/Header.jsx":"1912c7735cbb","ui_kits/website/Hero.jsx":"baef34aa7477","ui_kits/website/Reviews.jsx":"89175bce53f3","ui_kits/website/Services.jsx":"aafffb1e57e2","ui_kits/website/WhyChoose.jsx":"1242f5a68e96","ui_kits/website/image-slot.js":"9309434cb09c","ui_kits/website/service-data.js":"0252c4d37fc1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OctagonSecurityDesignSystem_9e6033 = window.OctagonSecurityDesignSystem_9e6033 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  tone = 'outline',
  icon = null,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['os-badge', `os-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['os-btn', `os-btn--${variant}`, `os-btn--${size}`, block ? 'os-btn--block' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    return /*#__PURE__*/React.createElement("img", {
      className: "os-card__media",
      src: src,
      alt: alt,
      loading: "lazy",
      decoding: "async"
    });
  }
  return /*#__PURE__*/React.createElement("picture", {
    className: "os-card__media"
  }, /*#__PURE__*/React.createElement("source", {
    srcSet: webp,
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    decoding: "async"
  }));
}
function Card({
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
  const cls = ['os-card', accent ? 'os-card--accent' : '', interactive ? 'os-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), image && /*#__PURE__*/React.createElement(CardMedia, {
    src: image,
    alt: imageAlt
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-card__body"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "os-card__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "os-card__text"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "os-card__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Eyebrow({
  rule = true,
  inverse = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['os-eyebrow', rule ? '' : 'os-eyebrow--bare', inverse ? 'os-eyebrow--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  variant = 'secondary',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['os-iconbtn', `os-iconbtn--${variant}`, `os-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ['os-field', invalid ? 'os-field--invalid' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "os-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "os-field__req"
  }, "*")), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    className: "os-input",
    "aria-invalid": invalid || undefined
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "os-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionTitle({
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
  const cls = ['os-sectiontitle', align === 'center' ? 'os-sectiontitle--center' : '', inverse ? 'os-sectiontitle--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    rule: align !== 'center',
    inverse: inverse
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "os-sectiontitle__h"
  }, title), rule && !eyebrow && /*#__PURE__*/React.createElement("hr", {
    className: "os-sectiontitle__rule"
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "os-sectiontitle__sub"
  }, subtitle));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const LABELS = {
  armed: 'Armed',
  secure: 'Secure',
  warning: 'Trouble',
  offline: 'Offline'
};
function StatusPill({
  status = 'secure',
  children,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['os-status', `os-status--${status}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "os-status__dot"
  }), children || LABELS[status]);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ClientLogos.jsx
try { (() => {
/* Octagon Security — Client Logos strip — real logos, white */

const CLIENTS = [{
  id: 'client-rolex',
  src: '../../assets/client-rolex-w.png',
  alt: 'Rolex',
  h: 52
}, {
  id: 'client-timepiece',
  src: '../../assets/client-timepiece-w.png',
  alt: 'Timepiece Trading',
  h: 44
}, {
  id: 'client-anima',
  src: '../../assets/client-anima-w.png',
  alt: 'Anima Domus',
  h: 40
}, {
  id: 'client-yacht',
  src: '../../assets/client-yacht-w.png',
  alt: 'Yacht Harbour',
  h: 34
}, {
  id: 'client-indiancreek',
  src: '../../assets/client-indiancreek-w.png',
  alt: 'Indian Creek Country Club',
  h: 44
}, {
  id: 'client-oceanreef',
  src: null,
  alt: 'Ocean Reef Club',
  h: 40
}];
function ClientLogos() {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-clients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container os-clients__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-clients__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-clients__line"
  }), "Trusted by South Florida's finest", /*#__PURE__*/React.createElement("span", {
    className: "os-clients__line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "os-clients__logos"
  }, CLIENTS.map(({
    id,
    src,
    alt,
    h
  }) => /*#__PURE__*/React.createElement("div", {
    className: "os-clients__item",
    key: id
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: "os-clients__logo-img",
    style: {
      height: h + 'px'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "os-clients__wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-clients__wm-name"
  }, "OCEAN REEF"), /*#__PURE__*/React.createElement("span", {
    className: "os-clients__wm-sub"
  }, "CLUB")))))));
}
Object.assign(window, {
  ClientLogos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ClientLogos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactForm.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Contact form + Quote modal */
const {
  Button: FButton,
  Input: FInput,
  SectionTitle: FSectionTitle,
  Badge: FBadge
} = window.OctagonSecurityDesignSystem_9e6033;
const FIc = window.OS_Ic;
function useForm() {
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return {
    sent,
    submit,
    reset: () => setSent(false)
  };
}
function FormFields({
  compact
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: compact ? 'os-form__grid os-form__grid--one' : 'os-form__grid'
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Phone",
    placeholder: "(786) 555-0142",
    required: true
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Property Type",
    placeholder: "Home, warehouse, office\u2026"
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "How can we help?",
    multiline: true,
    placeholder: "Tell us about your property and what you're looking to protect\u2026"
  }));
}
function ThankYou({
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "os-form__thanks"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-form__thanks-ic"
  }, /*#__PURE__*/React.createElement(FIc, {
    n: "check-circle"
  })), /*#__PURE__*/React.createElement("h3", null, "Thank you \u2014 we'll be in touch."), /*#__PURE__*/React.createElement("p", null, "A member of the Octagon team will reach out within one business day. Need us sooner? Call 786-928-0986."), /*#__PURE__*/React.createElement(FButton, {
    variant: "secondary",
    onClick: onReset
  }, "Send another message"));
}
function ContactSection() {
  const f = useForm();
  return /*#__PURE__*/React.createElement("section", {
    className: "os-section",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container os-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-contact__info"
  }, /*#__PURE__*/React.createElement(FSectionTitle, {
    eyebrow: "Contact Us",
    title: "Get a Free Estimate Today",
    subtitle: "Have questions or need a quote? Send us a message \u2014 expert advice, no pressure."
  }), /*#__PURE__*/React.createElement("ul", {
    className: "os-contact__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "os-contact__ic"
  }, /*#__PURE__*/React.createElement(FIc, {
    n: "phone"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Call"), /*#__PURE__*/React.createElement("a", {
    href: "tel:786-928-0986"
  }, "786-928-0986"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "os-contact__ic"
  }, /*#__PURE__*/React.createElement(FIc, {
    n: "map-pin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Service Area"), "Miami-Dade \xB7 Broward \xB7 Palm Beach")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "os-contact__ic"
  }, /*#__PURE__*/React.createElement(FIc, {
    n: "clock"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Response"), "Within one business day"))), /*#__PURE__*/React.createElement("div", {
    className: "os-contact__badges"
  }, /*#__PURE__*/React.createElement(FBadge, {
    tone: "outline",
    icon: /*#__PURE__*/React.createElement(FIc, {
      n: "shield-check"
    })
  }, "License EF0000848"), /*#__PURE__*/React.createElement(FBadge, {
    tone: "outline",
    icon: /*#__PURE__*/React.createElement(FIc, {
      n: "badge-check"
    })
  }, "ETL / UL Listed"))), /*#__PURE__*/React.createElement("div", {
    className: "os-contact__card"
  }, f.sent ? /*#__PURE__*/React.createElement(ThankYou, {
    onReset: f.reset
  }) : /*#__PURE__*/React.createElement("form", {
    className: "os-form",
    onSubmit: f.submit
  }, /*#__PURE__*/React.createElement(FormFields, null), /*#__PURE__*/React.createElement(FButton, {
    variant: "primary",
    size: "lg",
    type: "submit",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(FIc, {
      n: "arrow-right"
    })
  }, "Request My Quote")))));
}
function QuoteModal({
  open,
  onClose
}) {
  const f = useForm();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "os-modal",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-modal__card",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "os-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(FIc, {
    n: "x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "os-modal__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-eyebrow"
  }, "Free Quote"), /*#__PURE__*/React.createElement("h3", null, "Let's secure your property"), /*#__PURE__*/React.createElement("p", null, "Tell us a little about your project and we'll follow up fast.")), f.sent ? /*#__PURE__*/React.createElement(ThankYou, {
    onReset: onClose
  }) : /*#__PURE__*/React.createElement("form", {
    className: "os-form",
    onSubmit: f.submit
  }, /*#__PURE__*/React.createElement(FormFields, {
    compact: true
  }), /*#__PURE__*/React.createElement(FButton, {
    variant: "primary",
    size: "lg",
    type: "submit",
    block: true
  }, "Request My Quote"))));
}
Object.assign(window, {
  ContactSection,
  QuoteModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaBand.jsx
try { (() => {
/* Octagon Security — Website UI Kit · CTA Band ("Don't get robbed—call Rob.") */
const {
  Button: CButton,
  Eyebrow: CEyebrow
} = window.OctagonSecurityDesignSystem_9e6033;
const CIc = window.OS_Ic;
function CtaBand({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-ctaband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-ctaband__media",
    role: "img",
    "aria-label": "Installed security panel"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-ctaband__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-container os-ctaband__inner"
  }, /*#__PURE__*/React.createElement(CEyebrow, {
    inverse: true
  }, "A Promise From Our Team"), /*#__PURE__*/React.createElement("h2", {
    className: "os-ctaband__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-ctaband__white"
  }, "Don't get robbed\u2014"), /*#__PURE__*/React.createElement("span", {
    className: "os-ctaband__accent"
  }, "call Rob.")), /*#__PURE__*/React.createElement("p", {
    className: "os-ctaband__sub"
  }, "From cameras and burglar alarms with 24/7 monitoring to fire alarm systems and structured cabling, we design solutions built to perform and easy to manage. Starting fresh or upgrading, our team responds quickly and gets the job done right."), /*#__PURE__*/React.createElement("div", {
    className: "os-ctaband__cta"
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(CIc, {
      n: "phone"
    }),
    href: "tel:786-928-0986"
  }, "786-928-0986"), /*#__PURE__*/React.createElement(CButton, {
    variant: "dark",
    size: "lg",
    onClick: onQuote,
    iconRight: /*#__PURE__*/React.createElement(CIc, {
      n: "arrow-right"
    })
  }, "Get a Quote"))));
}
Object.assign(window, {
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Footer */
const FtIc = window.OS_Ic;
const FT_SERVICES = ['Home & Business Security', 'Security Cameras & Surveillance', 'Burglar Alarm Installation', 'Access Control Systems', 'Fire Alarm Systems', 'Structured Cabling'];
const FT_LINKS = ['Home', 'Reviews', 'Contact'];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "os-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container os-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "os-footer__logo",
    src: "../../assets/logo-full.png",
    alt: "Octagon Security"
  }), /*#__PURE__*/React.createElement("p", {
    className: "os-footer__tag"
  }, "Get Octagon Secured."), /*#__PURE__*/React.createElement("p", {
    className: "os-footer__lic"
  }, "FL License EF0000848 \xB7 ETL / UL Listed"), /*#__PURE__*/React.createElement("div", {
    className: "os-footer__social"
  }, ['instagram', 'facebook', 'youtube'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    className: "os-footer__soc"
  }, /*#__PURE__*/React.createElement(FtIc, {
    n: s
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "os-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("span", {
    className: "os-footer__rule"
  }), /*#__PURE__*/React.createElement("ul", null, FT_SERVICES.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "os-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick Links"), /*#__PURE__*/React.createElement("span", {
    className: "os-footer__rule"
  }), /*#__PURE__*/React.createElement("ul", null, FT_LINKS.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "os-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("span", {
    className: "os-footer__rule"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "os-footer__contact"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FtIc, {
    n: "phone"
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:786-928-0986"
  }, "786-928-0986")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FtIc, {
    n: "map-pin"
  }), " Miami, Florida"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FtIc, {
    n: "mail"
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "info@octagonsecured.com"))))), /*#__PURE__*/React.createElement("div", {
    className: "os-footer__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container os-footer__bar-inner"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Octagon Security. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "os-footer__legal"
  }, "Free Estimates \xB7 Licensed & Insured \xB7 FL License EF0000848"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Header */
const {
  Button,
  IconButton
} = window.OctagonSecurityDesignSystem_9e6033;
const Ic = ({
  n,
  ...p
}) => React.createElement('i', {
  'data-lucide': n,
  ...p
});
const SERVICES = [['camera', 'Security Cameras & Surveillance'], ['bell-ring', 'Burglar Alarms & Monitoring'], ['flame', 'Fire Alarm Systems & Inspections'], ['key-round', 'Access Control & Keyless Entry'], ['cable', 'Structured Cabling & Networking']];
function Header({
  onQuote
}) {
  const [open, setOpen] = React.useState(false); // mobile menu
  const [svc, setSvc] = React.useState(false); // services dropdown
  const nav = ['Home', 'Services', 'About Us'];
  return /*#__PURE__*/React.createElement("header", {
    className: "os-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-header__main"
  }, /*#__PURE__*/React.createElement("a", {
    className: "os-header__logo",
    href: "#",
    "aria-label": "Octagon Security home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-footer.png",
    alt: "Octagon Security"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "os-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "os-nav__link",
    href: "#"
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    className: "os-nav__has-menu",
    onMouseEnter: () => setSvc(true),
    onMouseLeave: () => setSvc(false)
  }, /*#__PURE__*/React.createElement("a", {
    className: "os-nav__link",
    href: "#"
  }, "Services ", /*#__PURE__*/React.createElement(Ic, {
    n: "chevron-down"
  })), svc && /*#__PURE__*/React.createElement("div", {
    className: "os-megamenu"
  }, SERVICES.map(([icon, label]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    className: "os-megamenu__item",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-megamenu__ic"
  }, /*#__PURE__*/React.createElement(Ic, {
    n: icon
  })), label)))), /*#__PURE__*/React.createElement("a", {
    className: "os-nav__link",
    href: "about.html"
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    className: "os-header__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "os-header__phone",
    href: "tel:786-928-0986"
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "phone"
  }), " 786-928-0986"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onQuote
  }, "Free Quote"), /*#__PURE__*/React.createElement("span", {
    className: "os-header__burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Ic, {
    n: open ? 'x' : 'menu'
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "os-mobilenav"
  }, nav.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: () => setOpen(false)
  }, l))));
}
Object.assign(window, {
  Header,
  OS_SERVICES: SERVICES,
  OS_Ic: Ic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Hero */
const {
  Button: HButton,
  Badge: HBadge
} = window.OctagonSecurityDesignSystem_9e6033;
const HIc = window.OS_Ic;
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-hero__media",
    role: "img",
    "aria-label": "Professional security installation"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-container os-hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-eyebrow os-eyebrow--inv"
  }, "Get Octagon Secured"), /*#__PURE__*/React.createElement("h1", {
    className: "os-hero__title"
  }, "Commercial & Residential Security Systems", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "os-hero__accent"
  }, "Installed Right the First Time")), /*#__PURE__*/React.createElement("p", {
    className: "os-hero__sub"
  }, "Security cameras, access control, burglar alarms, fire alarm systems, and structured cabling throughout Miami-Dade, Broward & Palm Beach Counties \u2014 installed cleanly, backed by fast response, and supported long-term."), /*#__PURE__*/React.createElement("div", {
    className: "os-hero__cta"
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(HIc, {
      n: "phone"
    }),
    href: "tel:786-928-0986"
  }, "786-928-0986"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    size: "lg",
    className: "os-hero__ghost",
    onClick: onQuote
  }, "Get a Free Quote")), /*#__PURE__*/React.createElement("div", {
    className: "os-hero__badges"
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "solid",
    icon: /*#__PURE__*/React.createElement(HIc, {
      n: "badge-check"
    })
  }, "Free Estimates"), /*#__PURE__*/React.createElement(HBadge, {
    tone: "solid",
    icon: /*#__PURE__*/React.createElement(HIc, {
      n: "shield-check"
    })
  }, "Licensed & Insured"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
/* Octagon Security — Google Reviews section (real reviews) */
const GIc = window.OS_Ic;
const GOOGLE_URL = 'https://www.google.com/maps/search/?api=1&query=Octagon+Security&query_place_id=ChIJU7SV0-LVgaMRPvofdtmIvio';
const REVIEWS = [{
  name: 'Nathan Levine',
  date: 'June 2026',
  initials: 'NL',
  text: 'Worked with Rob and the Octagon team to set my mom\'s house up in Pinecrest. He handled everything and it was a breeze to not have to make any decisions.'
}, {
  name: 'Nelson Rengifo Sr.',
  date: 'December 2025',
  initials: 'NR',
  text: 'Working with this team has been an exceptional experience. Their professionalism, responsiveness, and commitment to delivering high-quality work were evident throughout the entire project. I highly recommend them and look forward to future opportunities.',
  company: 'Nusight Consultants'
}, {
  name: 'anisa masoud',
  date: 'July 2024',
  initials: 'AM',
  text: 'Octagon Security is reliable and great at what they do. I\'ve hired so many camera security companies that just didn\'t know what they were doing — until I met Robert. Octagon Security will forever be my surveillance vendor.'
}, {
  name: 'Izzy Miller',
  date: 'May 2025',
  initials: 'IM',
  text: 'Octagon did the security system for our school. They are the MOST professional and nice! It was a big job but we loved having them — they became part of our school family.'
}, {
  name: 'Andrew McCreary',
  date: 'July 2025',
  initials: 'AM',
  text: 'We are extremely satisfied with the services provided by Octagon Security. Their customer service and attention to detail is above and beyond. I highly recommend this company for all your camera and burglar alarm needs.'
}, {
  name: 'Martin V.',
  date: 'May 2025',
  initials: 'MV',
  text: 'Been in South Florida my whole life and THIS is the sort of crew I\'ve been looking for. Perfect installations, kind team — would hire them again.'
}];
function Stars({
  n = 5
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "os-rev__stars",
    "aria-label": `${n} out of 5 stars`
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "#BE1F24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  }))));
}
function GoogleBadge() {
  return /*#__PURE__*/React.createElement("div", {
    className: "os-rev__badge"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M44.5 20H24v8.5h11.8C34.7 33.9 29.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M24 46c5.5 0 10.4-1.9 14.3-5L31.7 36c-2 1.4-4.5 2.1-7.7 2.1-5.1 0-9.5-3.1-11.5-7.5l-6.9 5.3C9.3 41.4 16.1 46 24 46z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M44.5 20H24v8.5h11.8c-.7 2.7-2.4 4.9-4.8 6.3l6.6 5.1C41.4 36.7 44.5 30.8 44.5 24c0-1.3-.2-2.7-.5-4z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "os-rev__badge-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-rev__badge-score"
  }, "5.0"), /*#__PURE__*/React.createElement("span", {
    className: "os-rev__badge-sub"
  }, "Google Reviews")), /*#__PURE__*/React.createElement(Stars, null));
}
function ReviewCard({
  review
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "os-rev__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-rev__card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-rev__avatar"
  }, review.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "os-rev__name"
  }, review.name), review.company && /*#__PURE__*/React.createElement("div", {
    className: "os-rev__company"
  }, review.company), /*#__PURE__*/React.createElement("div", {
    className: "os-rev__date"
  }, review.date)), /*#__PURE__*/React.createElement("svg", {
    className: "os-rev__google-ic",
    width: "18",
    height: "18",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      marginLeft: 'auto',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M44.5 20H24v8.5h11.8C34.7 33.9 29.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M24 46c5.5 0 10.4-1.9 14.3-5L31.7 36c-2 1.4-4.5 2.1-7.7 2.1-5.1 0-9.5-3.1-11.5-7.5l-6.9 5.3C9.3 41.4 16.1 46 24 46z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M44.5 20H24v8.5h11.8c-.7 2.7-2.4 4.9-4.8 6.3l6.6 5.1C41.4 36.7 44.5 30.8 44.5 24c0-1.3-.2-2.7-.5-4z"
  }))), /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("p", {
    className: "os-rev__text"
  }, "\"", review.text, "\""));
}
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-rev",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-rev__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "os-eyebrow"
  }, "What Our Clients Say"), /*#__PURE__*/React.createElement("h2", {
    className: "os-rev__title"
  }, "17 Five-Star Google Reviews")), /*#__PURE__*/React.createElement(GoogleBadge, null)), /*#__PURE__*/React.createElement("div", {
    className: "os-rev__grid"
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement(ReviewCard, {
    key: r.name + r.date,
    review: r
  }))), /*#__PURE__*/React.createElement("div", {
    className: "os-rev__footer"
  }, /*#__PURE__*/React.createElement("a", {
    className: "os-rev__cta",
    href: GOOGLE_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M44.5 20H24v8.5h11.8C34.7 33.9 29.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M24 46c5.5 0 10.4-1.9 14.3-5L31.7 36c-2 1.4-4.5 2.1-7.7 2.1-5.1 0-9.5-3.1-11.5-7.5l-6.9 5.3C9.3 41.4 16.1 46 24 46z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M44.5 20H24v8.5h11.8c-.7 2.7-2.4 4.9-4.8 6.3l6.6 5.1C41.4 36.7 44.5 30.8 44.5 24c0-1.3-.2-2.7-.5-4z"
  })), "See all 17 reviews on Google", /*#__PURE__*/React.createElement(GIc, {
    n: "arrow-right"
  })))));
}
Object.assign(window, {
  Reviews
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Services */
const {
  Card: SCard,
  Button: SButton,
  SectionTitle: SSectionTitle
} = window.OctagonSecurityDesignSystem_9e6033;
const SIc = window.OS_Ic;
const SERVICE_CARDS = [['../../assets/svc-burglar-alarm.png', 'Burglar Alarm Systems & Monitoring', 'Professional alarm systems with 24/7 monitoring, real-time alerts, and fast response. Built to detect intrusion quickly.'], ['../../assets/svc-access.png', 'Security Cameras & Surveillance', 'High-quality camera systems with clear video, remote access, and reliable performance — designed for full coverage.'], ['../../assets/svc-camera2.png', 'Fire Alarm Installation & Inspections', 'Code-compliant fire alarm systems, inspections, and monitoring to keep your property protected and up to standard.'], ['../../assets/svc-keypad.png', 'Structured Cabling & Networking', 'Clean, organized cabling for cameras, alarms, and networks — built for performance and long-term reliability.'], ['../../assets/svc-smoke.png', 'Access Control Systems', 'Control and manage entry points with keyless access designed for security, convenience, and accountability.'], ['../../assets/svc-home-business.png', 'Home & Business Security', 'Professional security system installation for homes and businesses across South Florida — cameras, alarms, fire, access control, and cabling.'], ['../../assets/svc-warehouse.png', 'Warehouse & Industrial Security', 'Integrated security for warehouses and distribution centers — video surveillance, access control, burglar alarms, and network infrastructure.']];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-section__head"
  }, /*#__PURE__*/React.createElement(SSectionTitle, {
    eyebrow: "What We Do",
    title: "Our Services",
    subtitle: "One team for cameras, alarms, fire, access control, and cabling \u2014 across South Florida."
  })), /*#__PURE__*/React.createElement("div", {
    className: "os-services"
  }, SERVICE_CARDS.map(([img, title, body]) => /*#__PURE__*/React.createElement(SCard, {
    key: title,
    image: img,
    imageAlt: title,
    title: title,
    accent: true,
    interactive: true,
    footer: /*#__PURE__*/React.createElement(SButton, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement(SIc, {
        n: "arrow-right"
      })
    }, "Learn More")
  }, body)), /*#__PURE__*/React.createElement("div", {
    className: "os-services__cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-services__cta-ic"
  }, /*#__PURE__*/React.createElement(SIc, {
    n: "phone-call"
  })), /*#__PURE__*/React.createElement("h3", null, "Not sure what you need?"), /*#__PURE__*/React.createElement("p", null, "Tell us about your property and we'll design a system that fits."), /*#__PURE__*/React.createElement(SButton, {
    variant: "primary",
    size: "lg",
    href: "tel:786-928-0986"
  }, "Talk to an Expert")))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyChoose.jsx
try { (() => {
/* Octagon Security — Website UI Kit · Why Choose */
const {
  SectionTitle: WSectionTitle
} = window.OctagonSecurityDesignSystem_9e6033;
const WIc = window.OS_Ic;
const REASONS = [['award', '65+ Years of Combined Experience', 'From cameras and alarms to fire systems and cabling, we design and install it properly the first time.'], ['layers', 'Full-Service Capabilities', 'CCTV, burglar alarms with 24/7 monitoring, fire alarm installation, and structured cabling — handled in-house.'], ['ruler', 'Clean, Professional Installations', 'Organized, well-executed work — every cable run and device placed with long-term reliability in mind.'], ['shield-check', '24/7 Monitoring & Rapid Support', 'Round-the-clock protection with fast response and dependable service whenever you need it.']];
function WhyChoose() {
  return /*#__PURE__*/React.createElement("section", {
    className: "os-section os-section--concrete"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-container"
  }, /*#__PURE__*/React.createElement(SectionTitleCentered, null), /*#__PURE__*/React.createElement("div", {
    className: "os-reasons"
  }, REASONS.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    className: "os-reason",
    key: title
  }, /*#__PURE__*/React.createElement("span", {
    className: "os-reason__ic"
  }, /*#__PURE__*/React.createElement(WIc, {
    n: icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "os-reason__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "os-reason__body"
  }, body))))));
}
function SectionTitleCentered() {
  return /*#__PURE__*/React.createElement("div", {
    className: "os-section__head"
  }, /*#__PURE__*/React.createElement(WSectionTitle, {
    eyebrow: "Why Choose Octagon",
    title: "Your Partner in Complete Property Protection",
    subtitle: "We assess each property, recommend practical solutions, and stay responsive long after the job is done.",
    align: "center"
  }));
}
Object.assign(window, {
  WhyChoose
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyChoose.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/service-data.js
try { (() => {
// Octagon Security — Service page content data
// All copy is sourced verbatim or closely paraphrased from octagonsecured.com
// Pages marked "STUB" need content filled in from the live site next pass.

window.OS_SERVICES_DATA = {
  'home-security': {
    slug: 'home-security',
    title: 'Home & Business Security System Installation',
    location: 'Miami, Florida',
    hero_subtitle: 'Experience Peace of Mind with Reliable Alarm Protection',
    intro: 'At Octagon Security, we provide professional security system installation for businesses and homeowners across Miami-Dade, Broward, and Palm Beach. Our systems are designed for reliability, ease of use, and long-term performance — whether you need a simple alarm system or a fully integrated solution. We focus on fast response, clean installations, and ongoing support, which is why most of our work comes from repeat clients and referrals.',
    intro2: 'With years of hands-on experience, we design and install security systems that are built for real-world use — whether it\'s a residential property or a large commercial facility. We focus on proper system design, clean installation, and long-term reliability so your system performs the way it should from day one. Beyond installation, we provide ongoing support, system upgrades, and monitoring services to keep everything running smoothly.',
    icon: 'shield-check',
    image: '../../assets/svc-home-business.png',
    features: [{
      title: 'Complete Security System Solutions',
      bullets: ['CCTV and video surveillance', 'Burglar alarm systems with 24/7 monitoring', 'Fire alarm systems and inspections', 'Access control and keyless entry', 'Structured cabling infrastructure'],
      note: 'Every system is tailored to your property, ensuring proper coverage, clean integration, and reliable long-term performance.'
    }, {
      title: 'Built for Homes & Commercial Properties',
      bullets: ['Residential homes and multi-family properties', 'Warehouses and industrial facilities', 'Offices and commercial buildings', 'Retail and mixed-use spaces'],
      note: 'Whether it\'s a new installation or an upgrade, we provide systems that are scalable, easy to manage, and built to last.'
    }, {
      title: 'Fast Response & Professional Installation',
      bullets: ['Fast response to new inquiries', 'Quick turnaround on quotes and scheduling', 'Efficient, clean installations'],
      note: 'Our clients rely on us to respond when it matters — and follow through.'
    }, {
      title: 'Integrated Systems That Work Together',
      bullets: ['Centralized monitoring', 'Remote access', 'Real-time alerts'],
      note: 'Your cameras, alarms, access control, and fire systems can be integrated into one platform.'
    }, {
      title: 'Ongoing Service & Support',
      bullets: ['System maintenance and inspections', 'Troubleshooting and repairs', 'Monitoring services', 'System upgrades as your needs grow'],
      note: 'Most of our clients continue working with us because we stay responsive and involved long after installation.'
    }, {
      title: 'Serving South Florida',
      bullets: ['Miami', 'Doral', 'Fort Lauderdale', 'Hollywood', 'Boca Raton', 'Surrounding areas'],
      note: ''
    }],
    benefits: [{
      title: 'Enhanced Property Protection',
      body: 'Detects unauthorized entry instantly, helping prevent theft, damage, and unauthorized access. High-quality equipment and precise installation ensure that entry points are monitored and risks are minimized.'
    }, {
      title: 'Remote Access & Alerts',
      body: 'Stay connected to your system with real-time notifications and control from your phone or device. Early detection of suspicious activity enhances personal safety and provides time to take action.'
    }, {
      title: '24/7 Monitoring & Response',
      body: 'Modern security systems allow constant monitoring through mobile apps, computer dashboards, or control panels. Professional monitoring ensures alarms are handled quickly and the proper response is triggered.'
    }, {
      title: 'Visible Deterrence',
      body: 'Visible security cameras, alarm systems, and access controls act as strong deterrents against potential intruders. Professionally installed systems reduce the likelihood of break-ins and unauthorized entry.'
    }, {
      title: 'System Integration',
      body: 'Works seamlessly with cameras, access control, and other systems for complete protection. Integration enhances convenience and safety by enabling control of multiple systems from one centralized platform.'
    }, {
      title: 'Scalable & Reliable',
      body: 'Easily expand your system as needed with dependable performance over time. The long-term financial benefits of security investment outweigh initial costs by safeguarding assets.'
    }],
    closing_title: 'Safeguarding Properties with Expert Security Installation',
    closing: 'Choosing professional security system installation ensures your property is properly protected, your system is installed correctly, and everything works together as intended. At Octagon Security, we provide reliable solutions for homes and businesses across South Florida, backed by fast response and ongoing support.',
    faqs: [{
      q: 'How long does it take to install a home or business security system?',
      a: 'Installation typically takes between 4 to 8 hours, depending on system complexity and property size. Our team works efficiently to minimize disruption, ensuring devices, cameras, and alarms are calibrated properly and fully operational.'
    }, {
      q: 'Can security systems be upgraded over time?',
      a: 'Absolutely. Security systems are designed with scalability in mind. Additional cameras, sensors, or access control components can be integrated seamlessly as your needs grow.'
    }, {
      q: 'What types of properties can your security systems protect?',
      a: 'Our systems are suitable for single-family homes, multi-unit residences, small offices, large commercial complexes, and retail spaces. Each installation is customized based on property layout and security needs.'
    }, {
      q: 'How does professional installation improve system effectiveness?',
      a: 'Professional installation ensures optimal placement of cameras, alarms, and sensors, reducing blind spots and minimizing false alarms. Expert calibration guarantees reliability and system integration.'
    }, {
      q: 'Does Octagon Security serve all areas in South Florida?',
      a: 'Yes, Octagon Security provides services across Miami-Dade, Broward, Palm Beach, and Monroe Counties. Our local expertise ensures each installation accounts for regional security needs and building structures.'
    }]
  },
  'cameras': {
    slug: 'cameras',
    title: 'Security Camera Installation & Video Surveillance Systems in South Florida',
    location: 'South Florida',
    hero_subtitle: 'Professional Surveillance Systems You Can Rely On',
    intro: 'At Octagon Security, we provide professional security camera installation and video surveillance systems for businesses and homes across Miami-Dade, Broward, and Palm Beach. Our systems are designed for clear visibility, remote access, and long-term reliability — whether you need basic coverage or a fully integrated commercial system.',
    intro2: 'Modern security cameras do more than just record — they give you full control over your property. Our systems include high-definition and 4K camera options, night vision and low-light performance, motion detection and real-time alerts, remote access from mobile devices, and cloud and local recording options.',
    icon: 'camera',
    image: '../../assets/svc-cameras.png',
    features: [{
      title: 'Designed for Homes & Commercial Properties',
      bullets: ['Residential homes and multi-family properties', 'Warehouses and distribution centers', 'Office buildings and commercial spaces', 'Retail and mixed-use properties'],
      note: 'Each system is designed to eliminate blind spots and provide reliable coverage where it matters most.'
    }, {
      title: 'Commercial Camera Systems for Larger Facilities',
      bullets: ['Large open areas and high ceilings', 'Loading docks and exterior coverage', 'Perimeter monitoring and entry points', 'License plate and access point visibility'],
      note: 'Advanced systems can include multi-sensor or panoramic cameras that reduce blind spots across large areas.'
    }, {
      title: 'Clean Installation & Proper Infrastructure',
      bullets: ['Clean, organized cabling', 'Proper camera placement and angles', 'Secure mounting and weather protection', 'Integration with existing systems'],
      note: 'Our structured cabling experience ensures your system is reliable from day one.'
    }, {
      title: 'Remote Access & Monitoring',
      bullets: ['View live footage from your phone or computer', 'Receive alerts for motion or activity', 'Access recorded footage instantly', 'Optional monitoring integration'],
      note: 'Modern systems allow full control and visibility no matter where you are.'
    }, {
      title: 'Upgrades & System Expansions',
      bullets: ['Upgrade outdated cameras', 'Improve image quality and coverage', 'Add additional cameras or storage', 'Integrate with alarms or access control'],
      note: 'We help bring older systems up to current standards without starting from scratch.'
    }, {
      title: 'Fast Response & Ongoing Support',
      bullets: ['Quick response to new inquiries', 'Fast scheduling and installation', 'Ongoing service and troubleshooting'],
      note: 'With over 65 years of combined experience, we provide support our clients rely on long-term.'
    }],
    benefits: [{
      title: 'Deterrence of Criminal Activity',
      body: 'Visible surveillance cameras act as a significant deterrent to potential intruders. Criminals are less likely to target properties monitored by high-quality cameras, reducing risk of theft and vandalism.'
    }, {
      title: 'Remote Access and Control',
      body: 'Smart security cameras allow property owners to monitor premises from any location using mobile devices — live footage, alerts, and camera control from anywhere.'
    }, {
      title: 'High-Definition Video Recording',
      body: 'Modern surveillance systems offer clear, high-resolution images essential for identifying individuals, vehicles, and incidents. HD recordings are critical for investigations, insurance claims, and law enforcement.'
    }, {
      title: 'Enhanced Employee and Property Monitoring',
      body: 'Surveillance systems support businesses in monitoring employee activity and ensuring workplace safety. Video evidence helps resolve disputes and safeguard sensitive areas.'
    }, {
      title: 'Integration with Other Security Devices',
      body: 'Smart cameras can integrate with alarms, access control, and lighting solutions, providing a cohesive security ecosystem with automated responses and enhanced threat detection.'
    }, {
      title: 'Peace of Mind and Safety Assurance',
      body: 'Knowing that a property is continuously monitored provides psychological comfort. Reliable video surveillance reduces anxiety about potential risks and ensures faster responses to incidents.'
    }],
    closing_title: 'Professional Security Monitoring Solutions You Can Rely On',
    closing: 'Securing your home or business in South Florida requires more than just installing cameras — it requires a system that\'s designed properly and supported over time. At Octagon Security, we install high-quality video surveillance systems that provide clear footage, reliable performance, and easy remote access from anywhere.',
    faqs: [{
      q: 'What types of smart security cameras do you install in South Florida?',
      a: 'We install a range of smart security cameras including indoor, outdoor, wireless, and PTZ models. Each system is customized to meet specific monitoring needs, providing clear video, motion detection, and mobile access.'
    }, {
      q: 'Can smart security cameras be monitored remotely?',
      a: 'Yes, all our smart cameras support remote monitoring via smartphones, tablets, or computers, allowing users to view live footage, receive alerts, and control camera settings from any location.'
    }, {
      q: 'Are the surveillance systems weatherproof for outdoor use?',
      a: 'Absolutely. Outdoor security cameras are designed to withstand extreme weather conditions, including rain, heat, and humidity, providing reliable performance and consistent monitoring year-round.'
    }, {
      q: 'How does video storage work for these systems?',
      a: 'Video footage can be stored locally on digital recorders or securely in cloud-based storage, ensuring easy retrieval of past recordings for investigation, compliance, or evidence purposes.'
    }, {
      q: 'Can your systems be expanded in the future?',
      a: 'Absolutely. All smart security systems are scalable, allowing additional cameras or sensors to be added as needed without replacing the existing system.'
    }]
  },
  'warehouse': {
    slug: 'warehouse',
    title: 'Warehouse Security Systems in Miami-Dade',
    location: 'Miami-Dade',
    hero_subtitle: 'Integrated Security Solutions for Warehouses and Distribution Centers',
    intro: 'Warehouses face unique security challenges including inventory protection, employee access management, loading dock activity, after-hours monitoring, and perimeter security. Octagon Security designs integrated warehouse security systems that combine video surveillance, access control, burglar alarms, and structured cabling to help protect people, property, and operations.',
    intro2: 'Whether you\'re securing a warehouse, distribution center, logistics facility, or industrial property, we provide scalable solutions designed for long-term reliability and operational visibility. Our systems help business owners monitor activity, control access, and respond quickly to security events from anywhere.',
    icon: 'building-2',
    image: '../../assets/svc-warehouse.png',
    features: [{
      title: 'Security Camera Systems',
      bullets: ['Monitor inventory, loading docks, and entrances', 'Parking area and perimeter coverage', 'Commercial-grade video surveillance', '24/7 visibility across all operations'],
      note: ''
    }, {
      title: 'Access Control Systems',
      bullets: ['Key cards, mobile credentials, and key fobs', 'Managed entry points for employees and visitors', 'Improve security and accountability', 'Track and log all access activity'],
      note: ''
    }, {
      title: 'Burglar Alarm Protection',
      bullets: ['Intrusion detection systems and monitored alarms', 'Motion sensors and perimeter security', 'Protect inventory, equipment, and facilities', 'Fast response from central monitoring'],
      note: ''
    }, {
      title: 'Loading Dock Security',
      bullets: ['Monitor shipping and receiving activity', 'Track deliveries with strategically placed cameras', 'Controlled access points for dock areas', 'Improve operational visibility'],
      note: ''
    }, {
      title: 'Structured Cabling & Network Infrastructure',
      bullets: ['Reliable CAT6 and fiber optic cabling', 'Supports cameras, access control, and wireless', 'Clean, organized installation', 'Built for long-term performance'],
      note: ''
    }, {
      title: 'Remote Monitoring & Mobile Access',
      bullets: ['View cameras and manage users from anywhere', 'Receive alerts for activity and security events', 'Monitor via secure mobile applications', 'Remote management tools for complete control'],
      note: ''
    }],
    benefits: [{
      title: 'Enhanced Property Protection',
      body: 'Detects unauthorized entry instantly, helping prevent theft, damage, and unauthorized access. High-quality equipment and precise installation ensure entry points are monitored and risks are minimized.'
    }, {
      title: 'Remote Access & Alerts',
      body: 'Stay connected to your system with real-time notifications and control from your phone or device. Early detection of suspicious activity provides time to take action.'
    }, {
      title: '24/7 Monitoring & Response',
      body: 'Modern security systems allow constant monitoring through mobile apps, computer dashboards, or control panels. Professional monitoring ensures alarms are handled quickly.'
    }, {
      title: 'Visible Deterrence',
      body: 'Visible cameras, alarms, and access controls act as strong deterrents. Professionally installed systems reduce the likelihood of break-ins and unauthorized entry at warehouses.'
    }, {
      title: 'System Integration',
      body: 'Works seamlessly with cameras, access control, and other systems for complete protection. Integration enables control of multiple systems from one centralized platform.'
    }, {
      title: 'Scalable & Reliable',
      body: 'Easily expand your system as needed with dependable performance over time. Scalable solutions protect investments and adapt to changing operational needs.'
    }],
    closing_title: 'Why Warehouses Choose Octagon Security',
    closing: 'Warehouses, distribution centers, and industrial facilities require security systems that are reliable, scalable, and designed for real-world operations. Octagon Security provides integrated solutions that combine video surveillance, access control, burglar alarms, and structured cabling to help protect inventory, employees, equipment, and daily operations.',
    faqs: [{
      q: 'What security cameras are best for warehouses?',
      a: 'Commercial-grade IP cameras with high-resolution video, remote viewing, and night vision capabilities are typically the best choice. Camera placement should cover entrances, loading docks, inventory areas, and exterior perimeters.'
    }, {
      q: 'How many security cameras does a warehouse need?',
      a: 'The number of cameras depends on the facility size, layout, entrances, loading docks, and inventory areas. Most warehouse systems are custom designed based on the property\'s specific needs.'
    }, {
      q: 'Can warehouse security cameras be viewed remotely?',
      a: 'Yes. Modern warehouse security systems allow authorized users to view live and recorded video from smartphones, tablets, and computers from virtually anywhere.'
    }, {
      q: 'What access control system works best for a warehouse?',
      a: 'Most warehouses benefit from key card, key fob, or mobile credential systems that allow management to control access, track entry activity, and quickly add or remove users.'
    }, {
      q: 'How can I secure loading docks and inventory areas?',
      a: 'A combination of security cameras, access control, intrusion detection, and proper lighting provides the most effective protection for loading docks, shipping areas, and valuable inventory.'
    }]
  },
  // ── PAGES BELOW need content filled from live site (next fetch pass) ──
  'burglar-alarm': {
    slug: 'burglar-alarm',
    title: 'Burglar Alarm Installation & Intrusion Detection',
    location: 'South Florida',
    hero_subtitle: 'Professional Intrusion Detection You Can Count On',
    intro: 'Content coming from octagonsecured.com/burglar-alarm-installation-and-intrusion-detection',
    intro2: '',
    icon: 'bell-ring',
    image: '../../assets/svc-access.png',
    features: [],
    benefits: [],
    faqs: [],
    closing_title: '',
    closing: '',
    _stub: true
  },
  'access-control': {
    slug: 'access-control',
    title: 'Access Control Systems & Keyless Entry Solutions',
    location: 'South Florida',
    hero_subtitle: 'Controlled Access for Homes and Businesses',
    intro: 'Content coming from octagonsecured.com/access-control-systems-and-keyless-entry-solutions',
    intro2: '',
    icon: 'key-round',
    image: '../../assets/svc-keypad.png',
    features: [],
    benefits: [],
    faqs: [],
    closing_title: '',
    closing: '',
    _stub: true
  },
  'fire-alarm': {
    slug: 'fire-alarm',
    title: 'Fire Alarm Systems & Smoke Detection Installation',
    location: 'South Florida',
    hero_subtitle: 'Code-Compliant Fire Protection for Your Property',
    intro: 'Content coming from octagonsecured.com/fire-alarm-systems-and-smoke-detection-installation',
    intro2: '',
    icon: 'flame',
    image: '../../assets/svc-smoke.png',
    features: [],
    benefits: [],
    faqs: [],
    closing_title: '',
    closing: '',
    _stub: true
  },
  'structured-cabling': {
    slug: 'structured-cabling',
    title: 'Structured Cabling & Network Infrastructure',
    location: 'South Florida',
    hero_subtitle: 'Clean, Reliable Low-Voltage Cabling Solutions',
    intro: 'Content coming from octagonsecured.com/structured-cabling',
    intro2: '',
    icon: 'cable',
    image: '../../assets/team-ladders.png',
    features: [],
    benefits: [],
    faqs: [],
    closing_title: '',
    closing: '',
    _stub: true
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/service-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.StatusPill = __ds_scope.StatusPill;

})();
