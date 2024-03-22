import Form from "@/components/From";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditPlace() {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading, error } = useSWR(`/api/places/${id}`);

  async function editPlace(place) {
    //console.log("place", place);
    const response = await fetch(`/api/places/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(place),
    });

    if (response.ok) {
      router.push(`/places/${id}/`);
    } else {
      console.error(response.status);
    }
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error</h2>;
  }
  return (
    <>
      <h2>Edit Place</h2>
      <Link href={`/places/${id}/`}>Back</Link>
      <Form onSubmit={editPlace} formName="Edit-Place" defaultData={data}></Form>
    </>
  );
}
