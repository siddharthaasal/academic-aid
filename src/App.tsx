import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.tsx';
import NotFound from "./pages/NotFound.tsx";
import Terms from "./pages/Terms.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";

function App() {

  return (
    <>
      < Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes >
    </>
  )
}

export default App
