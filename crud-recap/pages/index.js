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
    </>
  );
}
