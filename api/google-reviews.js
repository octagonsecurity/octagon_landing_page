// Permanent Google Business Profile identifiers from your Maps listing:
// https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,17z/...!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!...!16s/g/11y511ns2n
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,17z/data=!3m1!4b1!4m6!3m5!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!8m2!3d26.139327!4d-80.269756!16s%2Fg%2F11y511ns2n';
const GOOGLE_PLACE_CID = '3080049662739085886'; // decimal CID from !1s0xa381d5e2d395b453:0x2abe88d9761ffa3e
const PLACE_SEARCH = 'Octagon Security 786-928-0986 Miami FL';

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

function mapReviews(result) {
  return {
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
  };
}

async function fetchPlaceDetailsByCid(cid, key) {
  const params = new URLSearchParams({
    cid,
    fields: 'reviews,rating,user_ratings_total,url,place_id',
    reviews_sort: 'newest',
    key,
  });
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
  );
  return res.json();
}

async function fetchPlaceDetailsById(placeId, key) {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'reviews,rating,user_ratings_total,url',
    reviews_sort: 'newest',
    key,
  });
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
  );
  return res.json();
}

async function findPlaceId(key) {
  const findParams = new URLSearchParams({
    input: PLACE_SEARCH,
    inputtype: 'textquery',
    fields: 'place_id',
    key,
  });
  const findRes = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${findParams}`,
  );
  const findData = await findRes.json();

  if (findData.status === 'OK' && findData.candidates?.[0]?.place_id) {
    return findData.candidates[0].place_id;
  }

  const searchParams = new URLSearchParams({ query: PLACE_SEARCH, key });
  const searchRes = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?${searchParams}`,
  );
  const searchData = await searchRes.json();

  if (searchData.status === 'OK' && searchData.results?.[0]?.place_id) {
    return searchData.results[0].place_id;
  }

  throw new Error(
    findData.error_message
    || searchData.error_message
    || 'Could not find Octagon Security on Google Maps',
  );
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
    const cid = process.env.GOOGLE_PLACE_CID?.trim() || GOOGLE_PLACE_CID;
    let data = await fetchPlaceDetailsByCid(cid, key);

    if (data.status !== 'OK' || !data.result) {
      const placeId = process.env.GOOGLE_PLACE_ID?.trim() || await findPlaceId(key);
      data = await fetchPlaceDetailsById(placeId, key);
    }

    if (data.status !== 'OK' || !data.result) {
      return res.status(502).json({
        error: data.error_message || data.status || 'Google Places API error',
        url: GOOGLE_MAPS_URL,
      });
    }

    return res.status(200).json(mapReviews(data.result));
  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Failed to fetch Google reviews',
      url: GOOGLE_MAPS_URL,
    });
  }
}
