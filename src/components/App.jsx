import React from "react";
import Header from "./Header";
import Home from "./Home";
import News from "./Comment";
import Footer from "./Footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const token = useSelector((state) => state.application.token);

  if (!token) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/news/:id" element={<News />} />
        </Routes>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/category/:id" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
