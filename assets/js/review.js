const REVIEW_KEY = "shopvn_reviews";

function getReviews() {
  return JSON.parse(localStorage.getItem(REVIEW_KEY)) || [];
}

function addReview(productId, text, star) {
  const reviews = getReviews();

  reviews.push({
    productId,
    text,
    star,
    time: Date.now()
  });

  localStorage.setItem(REVIEW_KEY, JSON.stringify(reviews));
}