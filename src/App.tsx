import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Analysis from '@/pages/Analysis';
import Guides from '@/pages/Guides';
import ForeignCompanies from '@/pages/ForeignCompanies';
import GermanMuchico from '@/pages/GermanMuchico';
import CargoNet from '@/pages/CargoNet';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';
import Press from '@/pages/Press';
import Newsletter from '@/pages/Newsletter';
import Search from '@/pages/Search';
import ArticlePage from '@/pages/ArticlePage';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import EditorialPolicy from '@/pages/EditorialPolicy';
import Sources from '@/pages/Sources';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/actualidad" element={<News />} />
              <Route path="/analisis" element={<Analysis />} />
              <Route path="/guias" element={<Guides />} />
              <Route path="/empresas-extranjeras" element={<ForeignCompanies />} />
              <Route path="/german-muchico" element={<GermanMuchico />} />
              <Route path="/cargonet-group" element={<CargoNet />} />
              <Route path="/recursos" element={<Resources />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/prensa" element={<Press />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/buscar" element={<Search />} />
              <Route path="/notas/:slug" element={<ArticlePage />} />
              <Route path="/politica-de-privacidad" element={<Privacy />} />
              <Route path="/terminos-y-condiciones" element={<Terms />} />
              <Route path="/politica-editorial" element={<EditorialPolicy />} />
              <Route path="/fuentes-y-correcciones" element={<Sources />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
