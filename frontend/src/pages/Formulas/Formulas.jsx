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

  <div className={styles.container}>
        <div className={styles.card}>
          <h2>MECÂNICA</h2>
          <div className={styles.formula}>
            <span>VELOCIDADE MÉDIA</span>
            <div className={styles.caixa}>
              Vm = ΔS / Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>MRU</span>
            <div className={styles.caixa}>
              S = S₀ + V·T
            </div>
          </div>

          <div className={styles.formula}>
            <span>TORRICELLI</span>
            <div className={styles.caixa}>
              v² = v₀² + 2·a·Δs
            </div>
          </div>
        </div>