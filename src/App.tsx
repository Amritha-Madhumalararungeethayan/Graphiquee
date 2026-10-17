import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
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

function AppRoutes() {
  return (
    <>
      <nav className="site-navigation" aria-label="Site navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : ""}>Home</NavLink>
        <details className="site-navigation-dropdown">
          <summary>Team <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg></summary>
          <div className="site-navigation-menu">
            <NavLink to="/teamorg" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Team overview</NavLink>
            <NavLink to="/domains2" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>What we do</NavLink>
          </div>
        </details>
        <details className="site-navigation-dropdown">
          <summary>Projects <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg></summary>
          <div className="site-navigation-menu">
            <NavLink to="/projects" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Projects</NavLink>
            <NavLink to="/project2" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Project 2</NavLink>
          </div>
        </details>
        <details className="site-navigation-dropdown">
          <summary>Merch <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg></summary>
          <div className="site-navigation-menu">
            <Link to="/graphique#graphique-shop" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Shop</Link>
            <Link to="/graphique#graphique-collections" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Collections</Link>
            <NavLink to="/product" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Product</NavLink>
            <NavLink to="/cart" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Cart</NavLink>
          </div>
        </details>
      </nav>

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
