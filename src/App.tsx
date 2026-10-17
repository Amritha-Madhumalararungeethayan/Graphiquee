import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import TeamOrgPage from "./TeamPage";
import Projects from "./Projects";
import Project2 from "./Project2";
import Graphique from "./Graphique";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import LandingPage from "./LandingPage";
import Domains2Page from "./Domains2Page";

const appPages = [
  { to: "/", label: "Home" },
  { to: "/teamorg", label: "TeamOrg" },
  { to: "/projects", label: "Projects" },
  { to: "/project2", label: "Project 2" },
  { to: "/graphique", label: "Graphique" },
  { to: "/product", label: "Product" },
  { to: "/cart", label: "Cart" },
  { to: "/landing", label: "Landing" },
  { to: "/domains2", label: "What We Do" },
];

function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-navigation">
      {isOpen && (
        <nav className="app-navigation-panel" id="app-navigation-panel" aria-label="All pages">
          {appPages.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `app-navigation-link${isActive ? " is-active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
      <button
        className="app-navigation-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="app-navigation-panel"
        aria-label={isOpen ? "Close page navigation" : "Open page navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          {isOpen ? <path d="m5 5 10 10M15 5 5 15" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
        </svg>
        <span>Pages</span>
      </button>
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <AppNavigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teamorg" element={<TeamOrgPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/graphique" element={<Graphique />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/domains2" element={<Domains2Page />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
