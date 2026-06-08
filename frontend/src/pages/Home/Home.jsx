import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.content}>
          <h2>
            DOMINE A FÍSICA PARA O
            <br />
            VESTIBULAR
          </h2>
          <p>
            Acesse questões organizadas por
            vestibular e tópicos. Pratique e
            aprimore seus conhecimentos.
          </p>

          <button className={styles.btnSearch}>
            <Link className={styles.btnSearchA} to="/questoes">
              Buscar questões
            </Link>
          </button>
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            <h3>
              Treine Física de Verdade
            </h3>
            <p>
              Questões dos vestibulares pra você
              praticar sem parar.
            </p>
          </div>

         