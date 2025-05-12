// PageHandler.js
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import HeroSection from "../pages/HeroSection";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import About from "../pages/About";

// 1. Create context
export const PageContext = createContext(null);

// 2. Hook to provide values
const usePageValues = () => {
  const [activePage, setActivePage] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActivePage(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const paginationLinks = [
    { index: 0, address: HeroSection, name: "HOME" },
    { index: 0, address: About, name: "About" },
    { index: 1, address: Experience, name: "EXPERIENCE" },
    { index: 2, address: Projects, name: "PROJECTS" }
  ];

  return { activePage, setActivePage, paginationLinks, sectionsRef };
};

// 3. Context Provider
export const PageContextHandler = ({ children }) => {
  const values = usePageValues();
  return <PageContext.Provider value={values}>{children}</PageContext.Provider>;
};

// 4. Custom hook
export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageContextHandler");
  }
  return context;
};
