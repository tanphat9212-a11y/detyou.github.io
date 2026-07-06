let currentPage = 1;
const limit = 8;

function paginate(products) {
  const start = (currentPage - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
}

function nextPage() {
  currentPage++;
}