// Octagon Security Google Business Profile
// Maps: https://www.google.com/maps/place/Octagon+Security/...!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e
const PLACE_ID = 'ChIJU7SV0-LVgaMRPvofdtmIvio';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,17z/data=!3m1!4b1!4m6!3m5!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!8m2!3d26.139327!4d-80.269756!16s%2Fg%2F11y511ns2n';
const MIN_REVIEW_RATING = 4;

function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function formatReviewDate(isoString) {
  if (!isoString) return '';
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

function mapReviews(place) {
  return {
    rating: place.rating,
    total: place.userRatingCount,
    url: place.googleMapsUri || GOOGLE_MAPS_URL,
    reviews: (place.reviews || [])
      .filter((review) => (review.rating ?? 0) >= MIN_REVIEW_RATING)
      .map((review) => ({
      name: review.authorAttribution?.displayName || 'Google User',
      date: formatReviewDate(review.publishTime),
      initials: initials(review.authorAttribution?.displayName || 'G'),
      text: review.text?.text || review.originalText?.text || '',
      rating: review.rating,
      profileUrl: review.authorAttribution?.uri || null,
    })),
  };
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID?.trim() || PLACE_ID;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  if (!key) {
    return res.status(503).json({
      error: 'GOOGLE_PLACES_API_KEY is not configured',
      url: GOOGLE_MAPS_URL,
    });
  }

  try {
    const apiRes = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews,googleMapsUri',
      },
    });

    const data = await apiRes.json();

    if (!apiRes.ok) {
      return res.status(502).json({
        error: data.error?.message || `Places API error (${apiRes.status})`,
        url: GOOGLE_MAPS_URL,
      });
    }

    return res.status(200).json(mapReviews(data));
  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Failed to fetch Google reviews',
      url: GOOGLE_MAPS_URL,
    });
  }
}
