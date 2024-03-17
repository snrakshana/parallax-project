import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import AppLayout from "../components/Layouts/AppLayout";

const AppRoutes = () => (
  <Router>
    <div className="App">
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<ProductListPage />} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default AppRoutes;
