import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) {
    return <div>Failed to load product</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{data.name} </h1>
      <p>{data.description}</p>
      <small>{data.price}€</small>
      <br></br>
      <button
        onClick={() => {
          router.push("/products/");
        }}
      >
        Back to all
      </button>
    </>
  );
}
