/* Octagon Security — responsive <picture> with WebP + PNG/JPEG fallback */
function webpSrc(src) {
  return src && /\.(png|jpe?g)$/i.test(src) ? src.replace(/\.(png|jpe?g)$/i, '.webp') : null;
}

function Picture({ src, alt = '', className = '', pictureClassName = '', loading, decoding, width, height, ...rest }) {
  const webp = webpSrc(src);
  if (!webp) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        {...rest}
      />
    );
  }
  return (
    <picture className={pictureClassName || undefined}>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        {...rest}
      />
    </picture>
  );
}

Object.assign(window, { Picture, OS_webpSrc: webpSrc });
