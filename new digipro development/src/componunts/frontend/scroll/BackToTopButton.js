import React from "react";
import { useEffect, useState } from "react";

export default function BackToTopButton () {
    const [backToTopButton, serBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                
            }
        })
    })
    return (
        <div className="App"></div>;
    )
}