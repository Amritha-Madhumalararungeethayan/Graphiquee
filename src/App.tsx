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

function NavigationDropdown({
  label,
  items,
  isOpen,
  onOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: NavigationItem[];
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {

  return (
    <div
      className="site-navigation-dropdown"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`site-navigation-${label.toLowerCase()}`}
        onClick={onToggle}
      >
        {label}
        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg>
      </button>
      {isOpen && (
        <div className="site-navigation-menu" id={`site-navigation-${label.toLowerCase()}`}>
          {items.map(({ label: itemLabel, to }) => (
            <Link key={to} to={to} onClick={onClose}>{itemLabel}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

function AppRoutes() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const dropdown = (label: string, items: NavigationItem[]) => (
    <NavigationDropdown
      key={label}
      label={label}
      items={items}
      isOpen={openMenu === label}
      onOpen={() => setOpenMenu(label)}
      onToggle={() => setOpenMenu((current) => current === label ? null : label)}
      onClose={() => setOpenMenu((current) => current === label ? null : current)}
    />
  );

  return (
    <>
      <nav className="site-navigation" aria-label="Site navigation" onMouseLeave={() => setOpenMenu(null)}>
        <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : ""}>Home</NavLink>
        {dropdown("Team", [
          { label: "Team overview", to: "/teamorg" },
          { label: "Domains", to: "/domains1" },
          { label: "What we do", to: "/domains2" },
        ])}
        {dropdown("Projects", [
          { label: "Projects", to: "/projects" },
          { label: "Project 2", to: "/project2" },
        ])}
        {dropdown("Merch", [
          { label: "Shop", to: "/graphique#graphique-shop" },
          { label: "Collections", to: "/graphique#graphique-collections" },
          { label: "Product", to: "/product" },
          { label: "Cart", to: "/cart" },
        ])}
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
