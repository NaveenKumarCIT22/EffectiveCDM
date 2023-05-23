// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
// import ModifyPage from "./pages/ModifyPage";
// import ProfilePage from "./pages/ProfilePage";
// import ViewPage from "./pages/ViewPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<ViewPage />} />
      <Route path="/view" element={<ViewPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/add" element={<AddPage />} />
      <Route path="/modify" element={<ModifyPage />} />
      <Route path="/Profile/:usrid" element={<ProfilePage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
