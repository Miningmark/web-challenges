import React from "react";
import "./styles.css";

import Header from "./components/header.js";
import logo from "./img/logo.jpg";
import Nav from "./components/Navigation.js";
import Img from "./components/image.js";
import Link from "./components/Link.js";
import Avatar from "./components/avatar.js";

export default function App() {
  return (
    <>
      <Header>
      <Link href="#">
            <Img src={logo} alt="logo" />
        </Link>
        <Nav />
        <Avatar/>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
