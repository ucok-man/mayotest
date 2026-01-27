// App Component - Main routing and layout

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RobuxPage } from "./pages/RobuxPage";
import { RobuxPreorderPage } from "./pages/RobuxPreorderPage";
import { RobuxPreorderFormPage } from "./pages/RobuxPreorderFormPage";
import { RobuxPreorderGamepassPage } from "./pages/RobuxPreorderGamepassPage";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content - No padding needed, navbar is floating */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/robux" element={<RobuxPage />} />
          <Route path="/robux/preorder" element={<RobuxPreorderPage />} />
          <Route
            path="/robux/preorder/form"
            element={<RobuxPreorderFormPage />}
          />
          <Route
            path="/robux/preorder/gamepass"
            element={<RobuxPreorderGamepassPage />}
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
