import {
  BrowserRouter,
  Link,
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

type NavigationItem = { label: string; to: string };

function NavigationDropdown({ label, items }: { label: string; items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="site-navigation-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`site-navigation-${label.toLowerCase()}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg>
      </button>
      {isOpen && (
        <div className="site-navigation-menu" id={`site-navigation-${label.toLowerCase()}`}>
          {items.map(({ label: itemLabel, to }) => (
            <Link key={to} to={to} onClick={() => setIsOpen(false)}>{itemLabel}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <nav className="site-navigation" aria-label="Site navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : ""}>Home</NavLink>
        <NavigationDropdown label="Team" items={[
          { label: "Team overview", to: "/teamorg" },
          { label: "Domains", to: "/domains1" },
          { label: "What we do", to: "/domains2" },
        ]} />
        <NavigationDropdown label="Projects" items={[
          { label: "Projects", to: "/projects" },
          { label: "Project 2", to: "/project2" },
        ]} />
        <NavigationDropdown label="Merch" items={[
          { label: "Shop", to: "/graphique#graphique-shop" },
          { label: "Collections", to: "/graphique#graphique-collections" },
          { label: "Product", to: "/product" },
          { label: "Cart", to: "/cart" },
        ]} />
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/domains1" element={<HomePage />} />
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
