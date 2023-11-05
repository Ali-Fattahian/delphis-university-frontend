import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import ResearchResourcesPage from "./pages/Research/ResearchResourcesPage";
import ResearchCenterPage from "./pages/Research/ResearchCenterPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchResourcesPage />} path="/research-resources" />
        <Route element={<ResearchCenterPage />} path="/research-center" />
        <Route element={<CommunityPage />} path="/community" />
      </Routes>
    </Router>
  );
}

export default App;
