import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
            <Navbar />
            <Hero />
            <Tours />
            <Footer />
          </>}
        >
        <Route path="tours" element={
          <>
            <Navbar />
            <Tours />
            <Footer />
          </>
        } />
        <Route path="contact" element={
          <>
            <Navbar />
            <Tours />
            <Footer />
          </>
        } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
