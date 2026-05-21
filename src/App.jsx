import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Vision from './pages/Vision.jsx';
import Historique from './pages/Historique.jsx';
import Projet from './pages/Projet.jsx';
import Village from './pages/Village.jsx';
import Compagnon from './pages/Compagnon.jsx';
import Impact from './pages/Impact.jsx';
import ImpactStructure from './pages/ImpactStructure.jsx';
import ImpactModele from './pages/ImpactModele.jsx';
import ImpactDuplication from './pages/ImpactDuplication.jsx';
import Contact from './pages/Contact.jsx';
import Podcasts from './pages/Podcasts.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/village" element={<Village />} />
          <Route path="/compagnon" element={<Compagnon />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/impact-structure" element={<ImpactStructure />} />
          <Route path="/impact-modele" element={<ImpactModele />} />
          <Route path="/impact-duplication" element={<ImpactDuplication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
