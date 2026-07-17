import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main id="main-content" className="flex-1" role="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
