import Guitar from "./components/guitars.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Guitar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
