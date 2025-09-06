import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import Institutions from "./pages/Institutions";
import ScrollToTop from "./pages/ScrollToTop";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

