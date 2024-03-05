import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function randomPage() {
    const random = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${random.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          randomPage();
        }}
      >
        Random volumes
      </button>
    </>
  );
}
