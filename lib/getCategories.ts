import { loadJson } from "./loadData";

export function getCategories() {
  return loadJson("categories.json");
}

export function getCategory(slug: string) {
  const categories = getCategories();
  return categories.find((c: any) => c.slug === slug);
}
