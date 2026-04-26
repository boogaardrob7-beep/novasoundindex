import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

type Category = {
  slug: string;
  name: string;
  description?: string;
};

export default function CategoryPage({ category }: { category: Category }) {
  return (
    <main>
      <h1>{category.name}</h1>
      {category.description && <p>{category.description}</p>}
    </main>
  );
}

function loadCategories(): Category[] {
  const filePath = path.join(process.cwd(), "data", "categories.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = loadCategories();

  const paths = categories.map((c) => ({
    params: { slug: c.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const categories = loadCategories();
  const category = categories.find((c) => c.slug === slug);

  return {
    props: { category },
  };
};
