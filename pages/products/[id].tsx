import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

type Product = {
  id: string;
  name: string;
  description?: string;
  price?: number;
};

export default function ProductPage({ product }: { product: Product }) {
  return (
    <main>
      <h1>{product.name}</h1>
      {product.description && <p>{product.description}</p>}
    </main>
  );
}

function loadProducts(): Product[] {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = loadProducts();

  const paths = products.map((p) => ({
    params: { id: p.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const products = loadProducts();
  const product = products.find((p) => p.id === id);

  return {
    props: { product },
  };
};
