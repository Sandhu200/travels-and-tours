import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToursPage from './pages/ToursPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="about" element={ <HomePage /> } />
        <Route path="tours" element={ <ToursPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
