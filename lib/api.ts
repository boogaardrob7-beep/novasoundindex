export async function getProducts() {
  const res = await fetch("http://localhost:4000/api/products", { cache: "no-store" });
  return res.json();
}

export async function getProduct(slug: string) {
  const res = await fetch(`http://localhost:4000/api/products/${slug}`, { cache: "no-store" });
  return res.json();
}

export async function searchProducts(q: string) {
  const res = await fetch(`http://localhost:4000/api/search?q=${q}`, { cache: "no-store" });
  return res.json();
}
