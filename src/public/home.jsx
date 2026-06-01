import { Link } from "react-router-dom";
import "./global.css";
import logo from "./assets/img/logo_buscfisica.png";

function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>BUSCFÍSICA</h1>
          <img src={logo} alt="logo buscfísica" />
        </div>

        <nav className="navbar">
          <Link className="active" to="/">
            HOME
          </Link>

          <Link to="/questoes">
            QUESTÕES
          </Link>

          <Link to="/cadastro">
            CADASTRAR-SE
          </Link>

          <Link to="/formulas">
            FÓRMULAS
          </Link>

          <button id="logoutButton">
            SAIR
          </button>
        </nav>
      </header>

      <main>
        <section className="content">
          <h2>
            DOMINE A FÍSICA PARA O
            <br />
            VESTIBULAR
          </h2>

          <p>
            Acesse questões organizadas por vestibular e tópicos.
            Pratique e aprimore seus conhecimentos.
          </p>

          <button className="btn-search">
            Buscar questões
          </button>
        </section>

        <section className="cards">
          <div className="card">
            <h3>Treine Física de Verdade</h3>
            <p>
              Questões dos vestibulares para você praticar sem parar.
            </p>
          </div>

          <div className="card">
            <h3>Busca Avançada</h3>
            <p>
              Filtre por vestibular e tópico e encontre exatamente o
              conteúdo que precisa estudar.
            </p>
          </div>

          <div className="card">
            <h3>Acompanhe sua evolução</h3>
            <p>
              Monitore seus resultados e evolua com estratégia.
            </p>
          </div>
        </section>

        <section className="bottom">
          <h3>Pronto para começar?</h3>

          <p>
            Cadastre-se gratuitamente e tenha acesso completo à
            plataforma.
          </p>

          <Link to="/cadastro">
            <button className="btn-free_account">
              Criar Conta Grátis
            </button>
          </Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <h2>BUSCFÍSICA</h2>

          <button id="logoutButton">
            SAIR
          </button>
        </div>

        <div className="footer-column">
          <h4>CONTATO</h4>
          <p>BUSCFISICA7@GMAIL.COM</p>
          <p>(19) 99653-1673</p>
        </div>

        <div className="footer-column">
          <h4>DESENVOLVEDORES</h4>
          <p>AYLA CRISTINA DA SILVA VILELA</p>
          <p>GABRIELLA CAMACHO STAVARENGO</p>
          <p>GUSTAVO MILLAMONTE</p>
          <p>MANUELLA PIVA</p>
          <p>MARIA VITÓRIA GUEDES FERREIRA</p>
        </div>

        <div className="footer-column">
          <h4>VESTIBULARES</h4>
          <p>ENEM</p>
          <p>FUVEST</p>
          <p>UNICAMP</p>
        </div>
      </footer>
    </>
  );
}

export default Home;