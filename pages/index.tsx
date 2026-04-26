import fs from "fs";
import path from "path";
import Layout from "../components/Layout";

type Product = {
  id: string;
  name: string;
  description?: string;
  price?: number;
};

export default function Home({ products }: { products: Product[] }) {
  return (
    <Layout>
      <main>
        <h1>Producten</h1>
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return {
    props: {
      products,
    },
  };
}
