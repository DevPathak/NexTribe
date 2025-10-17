import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default AppRoutes;
