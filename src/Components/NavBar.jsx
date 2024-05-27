

import { Container } from "../Style/NavBar";

function NavBar() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="src/img/logo.png" alt="Logo da Empresa" />
            </a>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </Container>
  );
}

export default NavBar;
