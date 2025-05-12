// App.js
import React from "react";
import "./App.css";
import { usePage } from "./context/PageHandler";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

const App = () => {
  const { sectionsRef, paginationLinks } = usePage();

  return (
    <div>
      <Nav />
      {paginationLinks.map((section, i) => {
        const SectionComponent = section.address;
        return (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            data-index={i}
            className="section">
            <SectionComponent />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
