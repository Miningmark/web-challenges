import useSWR from "swr";
import Link from "next/link";

export default function Products() {
  const { data, isLoading, error } = useSWR("/api/products/");

  if (error) {
    return <p>Error loading products...</p>;
  }
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
