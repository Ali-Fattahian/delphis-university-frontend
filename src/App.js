import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import CommunityPage from "./pages/CommunityPage";
import ApplyPage from "./pages/ApplyPage";
import FacultyPage from "./pages/Faculty/FacultyPage";
import LoginPage from "./pages/LoginPage";
import TourPage from "./pages/TourPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/Research/ResearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchPage />} path="/research" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<ApplyPage />} path="/apply" />
        <Route element={<FacultyPage />} path="/faculty" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<TourPage />} path="/tour" />
        <Route element={<AdmissionsPage />} path="/admissions" />
      </Routes>
    </Router>
  );
}

export default App;
