/* Octagon Security — Google Reviews (live from Google Places API) */
const GIc = window.OS_Ic;

const REVIEWS_API = '/api/google-reviews';
const GOOGLE_FALLBACK_URL = 'https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,17z/data=!3m1!4b1!4m6!3m5!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!8m2!3d26.139327!4d-80.269756!16s%2Fg%2F11y511ns2n';

function Stars({ n = 5 }) {
  return (
    <span className="os-rev__stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#BE1F24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 29.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z"/>
      <path fill="#FBBC05" d="M24 46c5.5 0 10.4-1.9 14.3-5L31.7 36c-2 1.4-4.5 2.1-7.7 2.1-5.1 0-9.5-3.1-11.5-7.5l-6.9 5.3C9.3 41.4 16.1 46 24 46z"/>
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.7 2.7-2.4 4.9-4.8 6.3l6.6 5.1C41.4 36.7 44.5 30.8 44.5 24c0-1.3-.2-2.7-.5-4z"/>
    </svg>
  );
}

function GoogleBadge({ rating, total }) {
  const score = rating ? rating.toFixed(1) : '—';
  return (
    <div className="os-rev__badge">
      <GoogleIcon />
      <div className="os-rev__badge-text">
        <span className="os-rev__badge-score">{score}</span>
        <span className="os-rev__badge-sub">{total != null ? `${total} Google Reviews` : 'Google Reviews'}</span>
      </div>
      <Stars n={Math.round(rating || 5)} />
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="os-rev__card">
      <div className="os-rev__card-head">
        <span className="os-rev__avatar">{review.initials}</span>
        <div>
          <div className="os-rev__name">{review.name}</div>
          {review.date && <div className="os-rev__date">{review.date}</div>}
        </div>
        <GoogleIcon size={18} className="os-rev__google-ic" />
      </div>
      <Stars n={review.rating || 5} />
      <p className="os-rev__text">"{review.text}"</p>
    </div>
  );
}

function ReviewSkeleton() {
  return (
    <div className="os-rev__card os-rev__card--loading" aria-hidden="true">
      <div className="os-rev__skel os-rev__skel--head" />
      <div className="os-rev__skel os-rev__skel--stars" />
      <div className="os-rev__skel os-rev__skel--line" />
      <div className="os-rev__skel os-rev__skel--line os-rev__skel--short" />
    </div>
  );
}

function Reviews() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(REVIEWS_API);
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Could not load reviews');
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Could not load reviews');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const googleUrl = data?.url || GOOGLE_FALLBACK_URL;
  const total = data?.total;
  const rating = data?.rating;
  const reviews = data?.reviews || [];
  const title = total
    ? `${total} Five-Star Google Review${total === 1 ? '' : 's'}`
    : 'Google Reviews';

  return (
    <section className="os-rev" id="reviews">
      <div className="os-container">
        <div className="os-rev__head">
          <div>
            <div className="os-eyebrow">What Our Clients Say</div>
            <h2 className="os-rev__title">{loading ? 'Loading Google Reviews…' : title}</h2>
          </div>
          {!loading && (total != null || rating != null) && (
            <GoogleBadge rating={rating} total={total} />
          )}
        </div>

        {error && (
          <p className="os-rev__error">
            Reviews couldn't be loaded right now.{' '}
            <a href={googleUrl} target="_blank" rel="noopener noreferrer">Read them on Google</a>.
          </p>
        )}

        <div className="os-rev__grid">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ReviewSkeleton key={i} />)
            : reviews.map((r) => <ReviewCard key={`${r.name}-${r.date}`} review={r} />)}
        </div>

        <div className="os-rev__footer">
          <a className="os-rev__cta" href={googleUrl} target="_blank" rel="noopener noreferrer">
            <GoogleIcon size={18} />
            {total ? `See all ${total} reviews on Google` : 'See reviews on Google'}
            <GIc n="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Reviews });
