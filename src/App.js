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
import AcademicsPage from "./pages/AcademicsPage";
import CampusPage from "./pages/CampusPage";
import AboutPage from "./pages/AboutPage";
// import SearchResultsPage from "./pages/SearchResultsPage";
import StudentLifePage from "./pages/StudentLifePage";
import DiversityPage from "./pages/DiversityPage";
import SafetySupportPage from "./pages/SafetySupportPage";
import StudentHousingPage from "./pages/StudentHousingPage";
import AcademicCatalogPage from "./pages/AcademicCatalog/AcademicCatalogPage";

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
        <Route element={<AcademicsPage />} path="/academics" />
        <Route element={<CampusPage />} path="/campus-life" />
        <Route element={<AcademicCatalogPage />} path="/academic-catalog" />
        <Route element={<TourPage />} path="/tour" />
        <Route element={<AboutPage />} path="/about" />
        {/* <Route element={<SearchResultsPage />} path="/search-results" /> */}
        <Route element={<StudentLifePage />} path="/student-life" />
        <Route element={<DiversityPage />} path="/diversity" />
        <Route element={<SafetySupportPage />} path="/safety-support" />
        <Route element={<StudentHousingPage />} path="/student-housing" />
      </Routes>
    </Router>
  );
}

export default App;
