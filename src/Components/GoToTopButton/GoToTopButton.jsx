import "./GoToTopButton.scss";
import React, { useState } from "react";
import { ReactComponent as ArrowUp } from "../../Assets/Icons/ArrowUp.svg";

const ScrollArrow = () => {
  const [ShowScroll, setShowScroll] = useState(false);

  const CheckScrollToTop = () => {
    if (!ShowScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (ShowScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };

  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", CheckScrollToTop);

  return (
    <div className={ShowScroll ? "ScrollToTop" : ""}>
      <ArrowUp className="ScrollToTopArrow" onClick={ScrollTop} />
    </div>
  );
};

export default ScrollArrow;
