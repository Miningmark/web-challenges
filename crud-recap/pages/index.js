import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link";
import Card from "@/components/Card";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: orange;
  color: black;
  border-radius: 50%;
  border: 2px solid black;
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  text-align: center;

  transform: scale(1);
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export default function HomePage() {
  const { data, isLoading, error } = useSWR("api/places", { fallbackData: [] });
  return (
    <>
      <StyledUl>
        {data.map((place) => (
          <li key={place._id}>
            <Card
              name={place.name}
              id={place._id}
              image={place.image}
              location={place.location}
            ></Card>
          </li>
        ))}
      </StyledUl>
      <StyledLink href="/create">Add Place</StyledLink>
    </>
  );
}
