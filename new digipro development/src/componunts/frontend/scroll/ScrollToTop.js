import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop function for while landing into web page it will auto scroll to top if web page is already scrolled down
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}