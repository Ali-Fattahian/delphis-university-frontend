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
import AthleticsPage from "./pages/AthleticsPage";
import AcademicsPage from "./pages/AcademicsPage";
import CampusPage from "./pages/CampusPage";
import AboutPage from "./pages/AboutPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchPage />} path="/research" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<ApplyPage />} path="/apply" />
        <Route element={<FacultyPage />} path="/faculty-staff" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<AdmissionsPage />} path="/admissions" />
        <Route element={<AthleticsPage />} path="/athletics" />
        <Route element={<AcademicsPage />} path="/academics" />
        <Route element={<CampusPage />} path="/campus-life" />
        <Route element={<TourPage />} path="/tour" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<SearchResultsPage />} path="/search-results" />
      </Routes>
    </Router>
  );
}

export default App;
