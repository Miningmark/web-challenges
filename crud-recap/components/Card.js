import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledArticle = styled.article`
  border-radius: 10px;
  border: 2px solid black;
  width: 90vw;
  padding: 10px;
`;

export default function Card({ name, id, location, image }) {
  return (
    <>
      <StyledArticle>
        <figure>
          <Image src={image} alt={name} width={300} height={300}></Image>
          <figcaption>{name}</figcaption>
        </figure>
        <p>Location: {location}</p>
        <Link href={`places/${id}`}>More Info</Link>
      </StyledArticle>
    </>
  );
}
