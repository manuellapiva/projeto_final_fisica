import { Link, useNavigate } from "react-router-dom";
import styles from "./Formulas.module.css";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logo from "/img/logo_buscfisica.png";

export default function Formulas() {
  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <div className={styles.titulo}>
        <h1>FÓRMULAS</h1>
        <p>
          Veja as fórmulas mais usadas
        </p>
      </div>

