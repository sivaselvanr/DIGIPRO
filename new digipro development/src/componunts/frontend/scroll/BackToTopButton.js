import React from "react";
import { useEffect, useState } from "react";

export default function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="BackToTopButton">
            {backToTopButton && (
                <button className="BackToTopButton" 
                style={{
                    position: "fixed",
                    bottom: "50px",
                    height: "50px",
                    width: ""
                }}
                onClick={scrollUp}
                >^</button>
            )}
        </div>
    );
}            