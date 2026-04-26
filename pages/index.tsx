import { getProducts } from "../lib/getProducts";
import Layout from "../components/Layout";

export default function Home() {
  const products = getProducts();

  return (
    <Layout>
      <h1>NovasoundIndex</h1>
      <p>Automatisch gegenereerde audio shop.</p>

      <h2>Laatste producten</h2>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.category} — {p.genre}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
