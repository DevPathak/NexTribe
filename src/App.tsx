import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
