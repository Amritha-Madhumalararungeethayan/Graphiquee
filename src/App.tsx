import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

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
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/graphique" && location.pathname !== "/cart" && location.pathname !== "/landing" && location.pathname !== "/domains2" && (
        <nav
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 100,
          }}
        >
          <Link to="/" style={{ color: "white", marginRight: 16 }}>
            Home
          </Link>

          <Link to="/teamorg" style={{ color: "white", marginRight: 16 }}>
            TeamOrg
          </Link>

          <Link to="/projects" style={{ color: "white", marginRight: 16 }}>
            Projects
          </Link>

          <Link to="/project2" style={{ color: "white", marginRight: 16 }}>
            Project 2
          </Link>

          <Link to="/graphique" style={{ color: "white", marginRight: 16 }}>
            Graphique
          </Link>

          <Link to="/product" style={{ color: "white" }}>
            Product
          </Link>

          <Link to="/landing" style={{ color: "white", marginLeft: 16 }}>
            Landing
          </Link>

          <Link to="/domains2" style={{ color: "white", marginLeft: 16 }}>
            What We Do
          </Link>
        </nav>
      )}

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
