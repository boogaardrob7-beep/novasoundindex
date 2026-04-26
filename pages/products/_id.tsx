import { getProducts } from "../../lib/getProducts";
import Layout from "../../components/Layout";

export default function ProductPage({ id }: any) {
  const product = getProducts().find((p: any) => p.id === id);

  if (!product) {
    return <Layout><div>Product niet gevonden.</div></Layout>;
  }

  return (
    <Layout>
      <h1>{product.title}</h1>

      <ul>
        <li><strong>Categorie:</strong> {product.category}</li>
        <li><strong>Genre:</strong> {product.genre}</li>
        <li><strong>BPM:</strong> {product.bpm}</li>
        <li><strong>Taal:</strong> {product.language}</li>
        <li><strong>Duur:</strong> {product.duration} sec</li>
        <li><strong>Bestand:</strong> {product.file}</li>
      </ul>

      <h3>Tags</h3>
      <ul>
        {product.tags.map((t: string) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Layout>
  );
}

export function getServerSideProps(context: any) {
  return { props: { id: context.params.id } };
}
