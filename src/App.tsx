import React from "react";
import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/pages/Home";
import Login from "components/pages/Login";
import PageLayout from "components/common/Layout";

const GlobalStyle = createGlobalStyle`
  body{
    background:white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
