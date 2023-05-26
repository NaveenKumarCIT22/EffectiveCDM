// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ModifyPage from "./pages/ModifyPage";
import ProfilePage from "./pages/ProfilePage";
import ViewPage from "./pages/ViewPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/login" element={<LoginPage type="signin" />} />
        <Route path="/register" element={<LoginPage type="signup" />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/modify" element={<ModifyPage />} />
        <Route path="/profile/:usrid" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
