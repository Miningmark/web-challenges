import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character");

  if (error) {
    return <p>Failed to load</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </>
  );
}
