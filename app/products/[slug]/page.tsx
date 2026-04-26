import { getProduct } from "@/lib/api";

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.slug);

  return (
    <main className="p-10">
      <img
        src={`http://localhost:4000/thumbnails/${product.thumbnail}`}
        className="w-96 h-auto mb-6 rounded"
      />

      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="text-neutral-300 mb-6">{product.description}</p>

      <div className="text-2xl font-semibold mb-6">€{product.price}</div>

      <button className="bg-cyan-500 px-6 py-3 rounded text-black font-bold">
        Download / Buy
      </button>
    </main>
  );
}
