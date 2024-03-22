import styled from "styled-components";
import Head from "next/head";

const StyledH1 = styled.h1`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: antiquewhite;
  z-index: 1;
  text-align: center;
  padding: 15px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio-App</title>
      </Head>
      <StyledH1>Tourio</StyledH1>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
