// Import Link dari React Router
import { Link } from "react-router-dom";
import StyledNavbar, { Container } from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <StyledNavbar>
        <div>
          <h1>Covid App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li>
              <Link to="/pasien/Global">Global</Link>
            </li>
            <li>
              <Link to="/pasien/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/pasien/Provinsi">Provinsi</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;
