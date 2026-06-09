import { useEffect, useState } from "react";
import styles from "./Questoes.module.css";
import API_URL from "../../services/api";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import QuestaoCard from "../../components/QuestaoCard/QuestaoCard";

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);
  const [todasQuestoes, setTodasQuestoes] = useState([]);
  const [vestibulares, setVestibulares] = useState([]);
  const [topicos, setTopicos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [vestibularSelecionado, setVestibularSelecionado] = useState("");
  const [topicoSelecionado, setTopicoSelecionado,] = useState("");
  const [materiaSelecionada, setMateriaSelecionada] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setLoading(true);
      const [
        questoesRes,
        vestibularesRes,
        materiasRes,
        topicosRes,
      ] = await Promise.all([
        fetch(`${API_URL}/questoes`),
        fetch(`${API_URL}/vestibulares`),
        fetch(`${API_URL}/materia`),
        fetch(`${API_URL}/topico`)
      ]);
      const questoesData = await questoesRes.json();
      const vestibularesData = await vestibularesRes.json();
      const materiasData = await materiasRes.json();
      const topicosData = await topicosRes.json();

      setVestibulares(vestibularesData);
      setTopicos(topicosData);
      setMaterias(materiasData);
      setTodasQuestoes(questoesData);
      setQuestoes(questoesData);
    } catch (error) {
      console.error(error);
      setErro(
        "Erro ao carregar questões."
      );
    } finally {
      setLoading(false);
    }
  }

  function filtrarQuestoes() {
    let resultado = [
      ...todasQuestoes,
    ];
    if (
      vestibularSelecionado
    ) {
      const vestibular =
        vestibulares.find(
          (v) =>
            String(v.id) ===
            vestibularSelecionado
        );

      if (vestibular) {
        resultado =
          resultado.filter(
            (q) =>
              q.vestibular ===
              vestibular.nome
          );
      }
    }

    if (topicoSelecionado) {
      const topico =
        topicos.find(
          (t) =>
            String(t.id_top) ===
            topicoSelecionado
        );

      if (topico) {
        resultado =
          resultado.filter(
            (q) =>
              q.topico ===
              topico.nome_top
          );
      }
    }

    if (materiaSelecionada) {
      const materia =
        materias.find(
          (m) =>
            String(m.id_mat) ===
            materiaSelecionada
        );

      if (materia) {
        resultado =
          resultado.filter(
            (q) =>
              q.materia ===
              materia.nome_mat
          );
      }
    }

    setQuestoes(resultado);
  }

  return (
    <>
      <Header/>
      <section className={styles.filtrosContainer}>
        <div className={styles.filtros}>
          <div className={styles.filtroGrupo}>
            <label>Vestibular</label>
            <select 
              value={vestibularSelecionado}
              onChange={(e) =>
                setVestibularSelecionado(
                  e.target.value
                )}>
              <option value="">
                Todos
              </option>

              {vestibulares.map((vestibular, index) => (
                <option
                  key={vestibular.id || index}
                  value={vestibular.id}>
                  {vestibular.nome} - {vestibular.sigla}
                </option>
              ))}
            </select>
          </div>
          <div
            className={
              styles.filtroGrupo
            }>
            <label>
              Matéria
            </label>
            <select
              value={materiaSelecionada}
              onChange={(e) =>
                setMateriaSelecionada(
                  e.target.value
                )}>
              <option value="">
                Todas
              </option>

              {materias.map((materia, index) => (
                <option
                key={materia.id_mat || index}
                value={materia.id_mat}>
                  {materia.nome_mat}
                  </option>
                ))}
            </select>
          </div>
          <div
            className={
              styles.filtroGrupo
            }>
            <label>
              Tópico
            </label>

            <select
              value={
                topicoSelecionado
              }
              onChange={(e) =>
                setTopicoSelecionado(
                  e.target.value
                )}>
              <option value="">
                Todos
              </option>

              {topicos.map((topico, index) => (
                <option
                  key={topico.id_top || index}
                  value={topico.id_top}
                >
                  {topico.nome_top}
                </option>
              ))}
            </select>
          </div>
          <button
            className={
              styles.btnBuscar
            }
            onClick={
              filtrarQuestoes
            }>
            BUSCAR
          </button>
        </div>
      </section>

      <main
        className={styles.main}
      >
        {loading && (
          <h2>
            Carregando
            questões...
          </h2>
        )}

        {erro && (
          <h2>{erro}</h2>
        )}

        {!loading &&
          !erro &&
          questoes.map(
            (questao) => (
              <QuestaoCard
                key={questao.idq}
                questao={questao}
              />))}

        {!loading &&
          !erro &&
          questoes.length ===
            0 && (
            <h2>
              Nenhuma questão
              encontrada.
            </h2>
          )}
      </main>
      <Footer/>
    </>
  );
}