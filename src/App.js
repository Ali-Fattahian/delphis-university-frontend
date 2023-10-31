import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
