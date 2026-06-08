import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "/img/logo_buscfisica.png";

export default function Home() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("jwtToken");
    navigate("/");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>BUSCFÍSICA</h1>
          <img src={logo} alt="logo buscfísica" />
        </div>
        <nav className={styles.navbar}>
          <NavLink to="/home" className={({ isActive }) => isActive ? styles.active : ""}>HOME</NavLink>
          <NavLink to="/questoes" className={({ isActive }) => isActive ? styles.active : ""}>QUESTÕES</NavLink>
          <NavLink to="/formulas" className={({ isActive }) => isActive ? styles.active : ""}>FÓRMULAS</NavLink>

          <button className={styles.logoutButton} onClick={logout}>SAIR</button>
        </nav>
      </header>
    </>
  );
}