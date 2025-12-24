import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import ProjectDetail from './pages/ProjectDetail';
import './styles/global.css';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/projects/:id' element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
