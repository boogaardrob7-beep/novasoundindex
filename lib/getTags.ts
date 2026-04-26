import { loadJson } from "./loadData";

export function getTags() {
  return loadJson("tags.json");
}

export function getTag(slug: string) {
  const tags = getTags();
  return tags.find((t: any) => t.slug === slug);
}
