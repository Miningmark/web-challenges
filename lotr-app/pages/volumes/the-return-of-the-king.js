import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resources/lib/data";
import titleImage from "../../public/images/the-return-of-the-king.png";

export default function HomePage() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
      <Link href={"../volumes"}>All Volumes</Link>
    </div>
  );
}
