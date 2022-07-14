import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route>
          {navbar.map(({ path, id, Element, hidden, param }) => {
            return (
              !param &&
              hidden && <Route key={id} path={path} element={Element} />
            );
          })}
        </Route>

        <Route element={<Navbar />}>
          {navbar.map(({ path, id, Element, hidden, param }) => {
            return (
              (param || !hidden) && (
                <Route key={id} path={path} element={Element} />
              )
            );
          })}
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
