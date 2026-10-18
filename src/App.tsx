import {
  BrowserRouter,
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
        <NavLink to="/teamorg" className={({ isActive }) => isActive ? "is-active" : ""}>Team</NavLink>
        <NavLink to="/what-we-do" className={({ isActive }) => isActive ? "is-active" : ""}>What We Do</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "is-active" : ""}>Projects</NavLink>
        <NavLink to="/graphique" className={({ isActive }) => isActive ? "is-active" : ""}>Merch</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/domains1" element={<HomePage />} />
        <Route path="/teamorg" element={<TeamOrgPage />} />
        <Route path="/what-we-do" element={<><HomePage /><Domains2Page /></>} />
        <Route path="/projects" element={<><Projects /><Project2 /></>} />
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
