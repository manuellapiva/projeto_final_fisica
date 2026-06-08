import { useNavigate } from "react-router-dom";
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

         <div className={styles.card}>
          <h2>TERMOLOGIA</h2>
          <div className={styles.formula}>
            <span>CALOR SENSÍVEL</span>
            <div className={styles.caixa}>
              Q = m·c·Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>CALOR LATENTE</span>
            <div className={styles.caixa}>
              Q = m·L
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              1ª LEI DA TERMODINÂMICA
            </span>
            <div className={styles.caixa}>
              Q = τ + ΔU
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>ONDULATÓRIA</h2>
          <div className={styles.formula}>
            <span>FREQUÊNCIA</span>
            <div className={styles.caixa}>
              f = 1/T
            </div>
          </div>

          <div className={styles.formula}>
            <span>LEI DE SNELL</span>
            <div className={styles.caixa}>
              n₁sen(θ₁)=n₂sen(θ₂)
            </div>
          </div>

          <div className={styles.formula}>
            <span>EQ. DE GAUSS</span>
            <div className={styles.caixa}>
              1/f = 1/p + 1/p'
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>ELETRICIDADE</h2>
          <div className={styles.formula}>
            <span>LEI DE COULOMB</span>
            <div className={styles.caixa}>
              F = k·q₁·q₂ / d²
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              CORRENTE ELÉTRICA
            </span>
            <div className={styles.caixa}>
              i = Q / Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              POTÊNCIA ELÉTRICA
            </span>
            <div className={styles.caixa}>
              P = U·i
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}