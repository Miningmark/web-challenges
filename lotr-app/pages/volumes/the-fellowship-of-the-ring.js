import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resources/lib/data";
import titleImage from "../../public/images/the-fellowship-of-the-ring.png";
const slugTitel = "the-fellowship-of-the-ring";

export default function HomePage() {
  const data = volumes.find(({ slug }) => slug === slugTitel);
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <Image
        src={titleImage}
        alt="Picture of the author"
        width={140}
        height={230}
      ></Image>
      <p>{data.description}</p>
      <ul>
        {data.books.map((element) => (
          <li>{`${element.ordinal} ${element.title}`}</li>
        ))}
      </ul>
      {volumes.findIndex((volume) => volume.slug === slugTitel) < 0 && (
        <Link>next</Link>
      )}
      <Link href={"../volumes"}>All Volumes</Link>
    </div>
  );
}
