import React, { useState } from "react";
// Import necessary icons from react-icons/fi (Feather Icons)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLanding from "./Page/HomeLanding";

// Main App Component
const AppContent = () => {
  return (
    <Routes>
      {/* All your routes */}
      <Route path="/" element={<HomeLanding />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
