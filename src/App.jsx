import Guitar from "./components/guitars.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import Header from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import GuitarPicks from "./Pages/guitar-picks.jsx";

// import React, {useContext } from "react";

// import {quantity} from "./components/guitars.jsx";



function App() {

  return (
    <>

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Guitar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guitar-picks" element={<GuitarPicks />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
