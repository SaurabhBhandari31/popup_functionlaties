import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Popup from "./Component/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
     setTimeout(() => {
      setShowPopup(true);
    },5000);
  }, []);
  return (
    <>
    {showPopup && <Popup />}
      <Header />
      <Home />
      <Footer />
       
       
    </>
  );
}

export default App;
