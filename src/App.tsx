import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Home from './Home';
import TabsPage from './TabsPage';
import NotFound from './NotFound';
import './App.scss';

export const App: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    // location.pathname funciona corretamente com HashRouter (retorna path após #)
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Lembrete: <html class="has-navbar-fixed-top"> deve existir no index.html */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Home: wrapper pai recebe a classe is-active */}
            <div className={`navbar-item ${isActive('/') ? 'is-active' : ''}`}>
              <Link to="/" className={isActive('/') ? 'is-active' : ''}>
                Home
              </Link>
            </div>

            {/* Tabs: wrapper pai recebe a classe is-active (abrange /tabs e /tabs/:tabId) */}
            <div
              className={`navbar-item ${isActive('/tabs') ? 'is-active' : ''}`}
            >
              <Link to="/tabs" className={isActive('/tabs') ? 'is-active' : ''}>
                Tabs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
