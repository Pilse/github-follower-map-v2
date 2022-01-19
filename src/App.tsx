import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import Result from "./views/Result/Result";
import Page404 from "./views/Page404/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
