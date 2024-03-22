import Form from "@/components/From";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CreatePlace() {
  const router = useRouter();

  async function addPlace(place) {
    const response = await fetch("api/places/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <>
      <h2>Add Place</h2>
      <Link href="/">Back</Link>
      <Form onSubmit={addPlace} formName="Add New Place"></Form>
    </>
  );
}
