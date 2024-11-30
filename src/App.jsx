import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Guitar from "./components/guitars.jsx";
import Footer from "./components/footer.jsx";

// pages
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import GuitarPicks from "./Pages/guitar-picks.jsx";
import ToBuyList from "./Pages/ToBuyList.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Guitar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guitar-picks" element={<GuitarPicks />} />
          <Route path="/ToBuyList" element={<ToBuyList />} />
        </Routes>

        {window.location.pathname !== "/ToBuyList" && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
