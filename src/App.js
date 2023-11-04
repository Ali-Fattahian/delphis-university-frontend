import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import ResearchResourcesPage from "./pages/Research/ResearchResourcesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResearchResourcesPage />} path="/research-resources" />
      </Routes>
    </Router>
  );
}

export default App;
