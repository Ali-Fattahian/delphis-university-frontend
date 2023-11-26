import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import CommunityPage from "./pages/CommunityPage";
import FacultyPage from "./pages/Faculty/FacultyPage";
import LoginPage from "./pages/LoginPage";
import TourPage from "./pages/TourPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/Research/ResearchPage";
import AcademicsPage from "./pages/AcademicsPage";
import CampusPage from "./pages/Campus/CampusPage";
import AboutPage from "./pages/AboutPage";
// import SearchResultsPage from "./pages/SearchResultsPage";
import StudentLifePage from "./pages/StudentLifePage";
import DiversityPage from "./pages/DiversityPage";
import SafetySupportPage from "./pages/SafetySupportPage";
// import StudentHousingPage from "./pages/StudentHousingPage";
import AcademicCatalogPage from "./pages/AcademicCatalog/AcademicCatalogPage";
import CatalogGeneralInfoPage from "./pages/AcademicCatalog/CatalogGeneralInfoPage";
import ApplyGeneralPage from "./pages/Apply/ApplyGeneralPage";
import ApplyUndergraduatesPage from "./pages/Apply/ApplyUndergraduatesPage";
import ApplyGraduatesPage from "./pages/Apply/ApplyGraduatesPage";
import ApplyNowPage from "./pages/Apply/ApplyNowPage";
import RegisterPage from "./pages/RegisterPage";
import StudentEndorsementsPage from "./pages/StudentEndorsementsPage";
import AcademicCalendarPage from "./pages/Calendar/AcademicCalendarPage";
import EventsCalendarPage from "./pages/Calendar/EventsCalendarPage";
import CampusVisitPage from "./pages/Campus/CampusVisitPage";
import CalendarDetailsPage from "./pages/Calendar/CalendarDetailsPage";
import DelphisCityPage from "./pages/DelphisCityPage";
import ApplyCampusPage from "./pages/Apply/Campus/ApplyCampusPage";
import UndergraduatesAdmissionsPage from "./pages/Admissions/UndergraduatesAdmissionsPage";
import PremierAwardsPage from "./pages/PremierAwardsPage";
import StudentEventsPage from "./pages/StudentEventsPage";
import NewsCenterDetailPage from "./pages/NewsCenterDetailPage";
import NewsCenterPage from "./pages/NewsCenterPage";
import FreshmanRequirementsPage from "./pages/Requirements/FreshmanRequirementsPage";
import TransferRequirementsPage from "./pages/Requirements/TransferRequirementsPage";
import InternationalRequirementsPage from "./pages/Requirements/InternationalRequirementsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchPage />} path="/research" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<ApplyGeneralPage />} path="/apply" />
        <Route
          element={<ApplyUndergraduatesPage />}
          path="/apply-undergraduates"
        />
        <Route element={<ApplyGraduatesPage />} path="/apply-graduates" />
        <Route element={<ApplyNowPage />} path="/apply-now" />
        <Route element={<ApplyCampusPage />} path="/apply-campus" />
        <Route element={<FacultyPage />} path="/faculty-staff" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<AdmissionsPage />} path="/admissions" />
        <Route
          element={<UndergraduatesAdmissionsPage />}
          path="/undergraduates-admissions"
        />
        <Route element={<AcademicsPage />} path="/academics" />
        <Route element={<CampusPage />} path="/campus-life" />
        <Route element={<AcademicCatalogPage />} path="/academic-catalog" />
        <Route element={<CatalogGeneralInfoPage />} path="/general-catalog" />
        <Route element={<AcademicCalendarPage />} path="/academic-calendar" />
        <Route element={<EventsCalendarPage />} path="/events-calendar" />
        <Route
          element={<CalendarDetailsPage />}
          path="/event-calendar/:eventId"
        />
        <Route element={<TourPage />} path="/tour" />
        <Route element={<CampusVisitPage />} path="/campus-visit" />
        <Route element={<DelphisCityPage />} path="/delphis-city" />
        <Route element={<AboutPage />} path="/about" />
        {/* <Route element={<SearchResultsPage />} path="/search-results" /> */}
        <Route element={<StudentLifePage />} path="/student-life" />
        <Route element={<PremierAwardsPage />} path="/premier-awards" />
        <Route element={<StudentEventsPage />} path="/student-events" />
        <Route element={<DiversityPage />} path="/diversity" />
        <Route element={<SafetySupportPage />} path="/safety-support" />
        {/* <Route element={<StudentHousingPage />} path="/student-housing" /> */}
        <Route element={<NewsCenterPage />} path="/general-news-center" />
        <Route element={<NewsCenterDetailPage />} path="/news-center/:newsId" />
        <Route
          element={<FreshmanRequirementsPage />}
          path="/freshman-requirements"
        />
        <Route
          element={<TransferRequirementsPage />}
          path="/transfer-requirements"
        />
        <Route
          element={<InternationalRequirementsPage />}
          path="/international-requirements"
        />
        <Route
          element={<StudentEndorsementsPage />}
          path="/student-endorsement"
        />
      </Routes>
    </Router>
  );
}

export default App;
