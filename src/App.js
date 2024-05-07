import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToursPage from './pages/ToursPage';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="services" element={ <ServicesPage /> } />
        <Route path="tours" element={ <ToursPage /> } />
        <Route path="*" element= { <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
