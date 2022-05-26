import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route>
        {navbar.map(({ path, id, Element, hidden }) => {
          return hidden && <Route key={id} path={path} element={Element} />;
        })}
      </Route>

      <Route element={<Navbar />}>
        {navbar.map(({ path, id, Element }) => {
          return <Route key={id} path={path} element={Element} />;
        })}
      </Route>
    </Routes>
  );
};

export default Root;
