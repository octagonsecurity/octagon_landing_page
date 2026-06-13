const PLACE_ID = 'ChIJU7SV0-LVgaMRPvofdtmIvio';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,17z/data=!3m1!4b1!4m6!3m5!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!8m2!3d26.139327!4d-80.269756!16s%2Fg%2F11y511ns2n';

function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function formatReviewDate(unixSeconds) {
  if (!unixSeconds) return '';
  return new Date(unixSeconds * 1000).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  if (!key) {
    return res.status(503).json({
      error: 'GOOGLE_PLACES_API_KEY is not configured',
      url: GOOGLE_MAPS_URL,
    });
  }

  try {
    const params = new URLSearchParams({
      place_id: PLACE_ID,
      fields: 'reviews,rating,user_ratings_total,url',
      reviews_sort: 'newest',
      key,
    });
    const apiRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
    );
    const data = await apiRes.json();

    if (data.status !== 'OK' || !data.result) {
      return res.status(502).json({
        error: data.error_message || data.status || 'Google Places API error',
        url: GOOGLE_MAPS_URL,
      });
    }

    const { result } = data;
    return res.status(200).json({
      rating: result.rating,
      total: result.user_ratings_total,
      url: result.url || GOOGLE_MAPS_URL,
      reviews: (result.reviews || []).map((review) => ({
        name: review.author_name,
        date: formatReviewDate(review.time),
        initials: initials(review.author_name),
        text: review.text,
        rating: review.rating,
        profileUrl: review.author_url || null,
      })),
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Failed to fetch Google reviews',
      url: GOOGLE_MAPS_URL,
    });
  }
}
