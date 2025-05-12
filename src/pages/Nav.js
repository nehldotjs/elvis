import React, { useState } from "react";
import "../styles/Nav.css";
import { usePage } from "../context/PageHandler";

function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { sectionsRef, paginationLinks, activePage, setActivePage } = usePage();

  const handleClick = (i) => {
    setActivePage(i);
    const section = sectionsRef.current[i];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navWrapper">
      {paginationLinks.map((x, i) => {
        const { name } = x;
        const isHovered = hoveredIndex === i;
        const isActive = activePage === i;

        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`linkWrapper ${isHovered ? "linkWrapperAnim" : ""}`}>
            <div
              className={`paginationWrapper ${
                isHovered ? "paginationAnim" : ""
              }`}>
              <div
                className={`circle-linkPagination ${
                  isActive ? "active" : ""
                }`}></div>
              <h4 
                className={`linkName ${isHovered ? "h4TextAnim" : ""}`}>
                {name}
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Nav;
