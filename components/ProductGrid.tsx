import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p: any) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
