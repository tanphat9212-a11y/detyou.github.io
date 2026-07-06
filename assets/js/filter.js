let products = []; // load từ data/products.js

// filter theo giá
function filterByPrice(min, max) {
  return products.filter(p => p.price >= min && p.price <= max);
}

// filter theo category
function filterByCategory(category) {
  return products.filter(p => p.category === category);
}

// filter theo rating
function filterByRating(minRating) {
  return products.filter(p => p.rating >= minRating);
}

// combine filter
function applyFilters({ min, max, category, rating }) {
  let result = [...products];

  if (min != null && max != null) {
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (category) {
    result = result.filter(p => p.category === category);
  }

  if (rating) {
    result = result.filter(p => p.rating >= rating);
  }

  return result;
}