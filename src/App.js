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
import AboutPage from "./pages/About/AboutPage";
// import SearchResultsPage from "./pages/SearchResultsPage";
import StudentLifePage from "./pages/StudentLifePage";
import DiversityPage from "./pages/DiversityPage";
import SafetySupportPage from "./pages/SafetySupportPage";
// import StudentHousingPage from "./pages/StudentHousingPage";
import AcademicCatalogPage from "./pages/AcademicCatalog/AcademicCatalogPage";
import CatalogGeneralInfoPage from "./pages/AcademicCatalog/CatalogGeneralInfoPage";
import ApplyGeneralPage from "./pages/Apply/ApplyGeneralPage";
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
import PremierAwardsPage from "./pages/PremierAwardsPage";
import StudentEventsPage from "./pages/StudentEventsPage";
import NewsCenterDetailPage from "./pages/NewsCenterDetailPage";
import NewsCenterPage from "./pages/NewsCenterPage";
import FreshmanRequirementsPage from "./pages/Requirements/FreshmanRequirementsPage";
import TransferRequirementsPage from "./pages/Requirements/TransferRequirementsPage";
import InternationalAdmissionsPage from "./pages/Admissions/InternationalAdmissionsPage";
import UndergraduatesAdmissionsPage from "./pages/Admissions/UndergraduatesAdmissionsPage";
import ApplicationPage from "./pages/Apply/ApplicationPage";
import InternationalTransferPage from "./pages/International/InternationalTransferPage";
import InternationalFreshmanPage from "./pages/International/InternationalFreshmanPage";
import EnglishProofPage from "./pages/International/EnglishProofPage";
import MissionsAndObjectivesPage from "./pages/About/MissionsAndObjectivesPage";
import TraditionsPage from "./pages/About/TraditionsPage";
import HistoryPage from "./pages/About/HistoryPage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import EatAtDelphisPage from "./pages/EatAtDelphisPage";
import RoommatesPairsPage from "./pages/RoommatesPairsPage";
import HumanResourcesPage from "./pages/HumanResourcesPage";
import StaffDirectoryPage from "./pages/StaffDirectoryPage";
import DelphisOnlinePage from "./pages/DelphisOnlinePage";
import AwardWinnerOnlineDetailsPage from "./pages/AwardWinnerOnlineDetailsPage";
import OnlineAwardWinnersPage from "./pages/OnlineAwardWinnersPage";
import DistantProgramsPage from "./pages/DistantPrograms/DistantProgramsPage";
import LibrariesInformationPage from "./pages/LibrariesInformationPage";
import FindYourRecruiterPage from "./pages/FindYourRecruiterPage";
import InternationalGraduatesAdmissionsPage from "./pages/International/InternationalGraduatesAdmissionsPage";
import CostOfAttendanceInfoPage from "./pages/CostOfAttendanceInfoPage";
import CampusDiningPage from "./pages/CampusDiningPage";
import CampusSafetyPage from "./pages/CampusSafetyPage";
import UniversityPolicePage from "./pages/UniversityPolicePage";
import MuseumsPage from "./pages/MuseumsPage";
// import EmployeeHandbookPage from "./pages/EmployeeHandbookPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchPage />} path="/research" />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<ApplyGeneralPage />} path="/apply" />
        <Route element={<ApplicationPage />} path="/application" />
        <Route element={<ApplyGraduatesPage />} path="/apply-graduates" />
        <Route element={<ApplyNowPage />} path="/apply-now" />
        <Route element={<ApplyCampusPage />} path="/apply-campus" />
        <Route element={<FacultyPage />} path="/faculty-staff" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<AdmissionsPage />} path="/admissions" />
        <Route
          element={<UndergraduatesAdmissionsPage />}
          path="/undergraduate-admissions"
        />
        <Route
          element={<InternationalAdmissionsPage />}
          path="/international-admissions"
        />
        <Route
          element={<InternationalTransferPage />}
          path="/international/transfer"
        />
        <Route
          element={<InternationalFreshmanPage />}
          path="/international/freshman"
        />
        <Route
          element={<InternationalGraduatesAdmissionsPage />}
          path="/international/graduates-admissions"
        />
        <Route
          element={<EnglishProofPage />}
          path="/international/english-proficiency-proof"
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
        <Route element={<UpcomingEventsPage />} path="/upcoming-events" />
        <Route element={<EatAtDelphisPage />} path="/eat-delphis" />
        <Route element={<CampusVisitPage />} path="/campus-visit" />
        <Route element={<DelphisCityPage />} path="/delphis-city" />
        <Route element={<AboutPage />} path="/about" />
        <Route
          element={<MissionsAndObjectivesPage />}
          path="/missions-objectives"
        />
        <Route element={<TraditionsPage />} path="/traditions" />
        <Route element={<HistoryPage />} path="/history" />
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
          element={<StudentEndorsementsPage />}
          path="/student-endorsement"
        />
        <Route element={<HumanResourcesPage />} path="/human-resources" />
        <Route element={<RoommatesPairsPage />} path="/roommates-pairs" />
        <Route element={<StaffDirectoryPage />} path="/staff-directory" />
        <Route element={<DelphisOnlinePage />} path="/delphis-online" />
        <Route element={<DistantProgramsPage />} path="/distant-programs" />
        <Route
          element={<OnlineAwardWinnersPage />}
          path="/online-award-winners"
        />
        <Route
          element={<AwardWinnerOnlineDetailsPage />}
          path="/online-award-winners/:winner-id"
        />
        <Route element={<LibrariesInformationPage />} path="/libraries" />
        <Route element={<FindYourRecruiterPage />} path="/find-recruiter" />
        <Route element={<CostOfAttendanceInfoPage />} path="/cost-info" />
        <Route element={<CampusDiningPage />} path="/campus-dining" />
        <Route element={<CampusSafetyPage />} path="/campus-life/safety" />
        <Route element={<UniversityPolicePage />} path="/university-police" />
        <Route element={<MuseumsPage />} path="/museums" />
        {/* <Route element={<EmployeeHandbookPage />} path="/employee-handbook" /> */}
      </Routes>
    </Router>
  );
}

export default App;
