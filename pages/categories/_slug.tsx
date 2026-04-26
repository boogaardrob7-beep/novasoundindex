import { getCategories } from "../../lib/getCategories";
import { getProducts } from "../../lib/getProducts";
import Layout from "../../components/Layout";

export default function CategoryPage({ slug }: any) {
  const categories = getCategories();
  const category = categories.find((c: any) => c.slug === slug);
  const products = getProducts().filter((p: any) => p.category === slug);

  if (!category) {
    return <Layout><div>Categorie niet gevonden.</div></Layout>;
  }

  return (
    <Layout>
      <h1>{category.title}</h1>
      <p>{category.description}</p>

      <h2>Producten</h2>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.genre} — {p.bpm} BPM
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getServerSideProps(context: any) {
  return { props: { slug: context.params.slug } };
}
