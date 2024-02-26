import React from "react";
import Link from "./Link.js";

export default function Nav(){
    return(
        <nav>
            <Link name="Home" href="#home"/>
            <Link name="About" href="#about"/>
            <Link name="Impressum" href="#impressum"/>
        </nav>
    );
}