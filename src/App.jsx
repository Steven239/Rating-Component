import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYouPage from "./Components/ThankYouPage";

function App() {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/thankyou" element={<ThankYouPage />}></Route>
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
