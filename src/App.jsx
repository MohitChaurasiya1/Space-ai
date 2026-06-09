import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Objectives from "./pages/Objectives";
import Methodology from "./pages/Methodology";
import Architecture from "./pages/Architecture";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team/members" element={<Members />} />
          <Route path="/team/students" element={<Students />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;