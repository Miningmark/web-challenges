import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error } = useSWR(`/api/places/${id}`);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <>
        <h2>Error</h2>
        <Link href="/">Back to Home</Link>
      </>
    );
  }

  async function deletePlace() {
    const response = await fetch(`/api/places/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <>
      <Link href="/">Back</Link>
      <Image src={data.image} alt={data.name} width={300} height={300}></Image>
      <h2>
        {data.name}, {data.location}
      </h2>
      <Link href={data.mapURL}>Location on Google Maps</Link>
      <p>{data.description}</p>
      <div>
        <Link href={`/places/${id}/edit`}>Edit</Link>
        <button onClick={deletePlace} type="button">
          Delete
        </button>
      </div>
    </>
  );
}
