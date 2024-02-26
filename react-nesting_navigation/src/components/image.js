import React from "react";
import "../styles.css";

export default function Img({src, alt}){
    return(
        <img className="round-image" src={src} alt={alt} />
    );
}