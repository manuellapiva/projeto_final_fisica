import { useState } from "react";
import styles from "../../pages/Questoes/Questoes.module.css";
import API_URL from "../../services/api";

export default function QuestaoCard({ questao }) {
  const [resposta, setResposta] = useState(null);
  const [mostrarResposta, setMostrarResposta] =
    useState(false);

  async function buscarResposta() {
    if (mostrarResposta) {
      setMostrarResposta(false);
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/questoes/${questao.idq}`
      );

      if (!response.ok) {
        throw new Error(
          "Erro ao buscar resposta"
        );
      }

      const data = await response.json();
      console.log("RESPOSTA:", data);
      setResposta(data);
      setMostrarResposta(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.questaoBox}>
      <div className={styles.tags}>
        <span>{questao.vestibular}</span>

        <span>{questao.ano}</span>

        <span>{questao.topico}</span>

        <span>{questao.materia}</span>

        <span>{questao.dificuldade}</span>
      </div>

      <div className={styles.questaoCard}>
        <div className={styles.enunciado}>
          {questao.enunciado}
        </div>

        {questao.imagem_url && (
          <div className={styles.imagemQuestao}>
            <img
              src={questao.imagem_url}
              alt="Questão"
            />
          </div>
        )}

        <div className={styles.alternativas}>
          <button className={styles.alternativa}>
            {questao.alt_a}
          </button>

          <button className={styles.alternativa}>
            {questao.alt_b}
          </button>

          <button className={styles.alternativa}>
            {questao.alt_c}
          </button>

          <button className={styles.alternativa}>
            {questao.alt_d}
          </button>

          {questao.alt_e && (
            <button
              className={styles.alternativa}
            >
              {questao.alt_e}
            </button>
          )}
        </div>
                <button
          className={styles.btnResposta}
          onClick={buscarResposta}
        >
          {mostrarResposta
            ? "OCULTAR RESPOSTA"
            : "VER RESPOSTA"}
        </button>

        {mostrarResposta &&
          resposta && (
            <div
              className={
                styles.caixaResposta
              }
            >
              <div
                className={
                  styles.respostaConteudo
                }
              >
                <h3>
                  Resposta Correta
                </h3>

                <p>
                  {
                    resposta.resp_correta
                  }
                </p>

                <hr />

                <p>
                  {
                    resposta.explicacao_prof
                  }
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}