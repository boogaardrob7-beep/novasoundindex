import { loadJson } from "./loadData";

export function getProducts() {
  return loadJson("products.json");
}

export function getProductById(id: string) {
  const products = getProducts();
  return products.find((p: any) => p.id === id);
}
