import React from "react";
import { useEffect, useState } from "react";
import './BackToTopButton.css';

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

    return (<div className="App">
            {backToTopButton && (
                <button 
                onClick={scrollUp}><i class="bi bi-arrow-up"></i></button>
            )}
        </div>
    );
}