
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { GalleryPage } from "./pages/GalleryPage";

// ScrollToTop component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
