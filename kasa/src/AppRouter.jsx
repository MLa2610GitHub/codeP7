import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FicheLogement from './Pages/FicheLogement';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import '../src/Styles/index.css';

//BrowserRouter est placé à la racine de l'arborescence
//Il englobe toutes les routes qu'on a définies
/*Les composants Header et Footer sont intégrés dans le layout de l'app */
//Navigation dynamique vers chaque logement disponible grâce à /fiche/:title
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche/:title" element={<FicheLogement />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
