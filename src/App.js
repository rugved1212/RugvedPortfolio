import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/jsFiles/LandingPage";
import TermsOfUse from "./pages/jsFiles/TermsOfUse";
import PrivacyPolicy from "./pages/jsFiles/PrivacyPolicy";
import DeleteAccountPage from "./pages/jsFiles/DeleteAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
