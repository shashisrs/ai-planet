import React from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Favourites from "./pages/Favourites";
import Help from "./pages/Help";
import Submit from "./pages/Submit";
import AdminPanel from "./pages/AdminPanel";
import AdminDashboard from "./components/AdminDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<UserDashboard />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/help" element={<Help />} />
        <Route path="/submit" element={<Submit />} />
      </Route>
      <Route path="/admin" element={<AdminPanel />}>
      <Route index element={<AdminDashboard />} />
        {/* <Route path="/favourites" element={<Favourites />} /> */}
        {/* <Route path="/help" element={<Help />} /> */}
        {/* <Route path="/submit" element={<Submit />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
