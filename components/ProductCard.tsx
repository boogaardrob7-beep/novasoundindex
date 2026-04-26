import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="border border-neutral-800 p-4 rounded-lg hover:border-cyan-400 transition">
        <img
          src={`http://localhost:4000/thumbnails/${product.thumbnail}`}
          className="w-full h-auto mb-4 rounded"
        />
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-neutral-400 text-sm">{product.category}</p>
      </div>
    </Link>
  );
}
