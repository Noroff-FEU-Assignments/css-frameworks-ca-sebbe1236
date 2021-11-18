import "./sass/style.scss";
import React from "react";

import Navigation from "./components/navbar";
import Homecontent from "./components/Homepagecontent";
import Footer from "./components/footer";
import News from "./components/News";
import Contact from "./components/Contact";
import { render } from "react-dom"; //sto node-sass tidligere istedet for react-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div id="root">
        <Routes>
          <Route path="/" element={<Homecontent />} exact />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route component={Error} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
