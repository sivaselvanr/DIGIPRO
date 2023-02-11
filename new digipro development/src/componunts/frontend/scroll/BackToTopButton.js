import React from "react";
import { useEffect, useState } from "react";

// importing BackToTopButton.css file
import './BackToTopButton.css';

// BackToTopButton function
export default function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    // if web page is scrolled for 100px BackToTopButton will be display in the bottom right corner
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    // scrolup to top of the page
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // while clicking BackToTopButton scrollup
    return (<div className="BackToTopButton">
            {backToTopButton && (
                <button id="BackToTopButton" onClick={scrollUp}><i class="bi-caret-up"></i>
                </button>
            )}
        </div>
    );
}
// <i class="bi bi-arrow-up-circle-fill"></i> onClick={scrollUp}