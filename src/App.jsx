import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import WhatsAppButton from "./components/WhatsappButton";

function Layout({ children }) {
  const location = useLocation();

  // If you later want to hide Navbar/Footer on some pages, use this:
  // const hideLayout =
  //   location.pathname === "/login" || location.pathname === "/signup";

  const hideLayout = false; // frontend-only mode

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:category" element={<ProductCategoryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>

      <WhatsAppButton />
    </Router>
  );
}

export default App;
