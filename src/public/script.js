// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

let todasQuestoes = [];
let vestibulares = [];
let topicos = [];
let materias = [];

// ========================================
// ELEMENTOS
// ========================================

const vestibularSelect = document.getElementById("filtroVestibular");
const topicoSelect = document.getElementById("filtroTopico");
const materiaSelect = document.getElementById("filtroMateria");
const questoesContainer = document.getElementById("questoesContainer");
const btnBuscar = document.getElementById("btnBuscar");

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function mostrarLoading() {
    questoesContainer.innerHTML = `
        <div class="loading">
            Carregando questões...
        </div>
    `;
}

function mostrarErro(msg) {
    questoesContainer.innerHTML = `
        <div class="erro">
            ${msg}
        </div>
    `;
}

const logoutButton = document.getElementById('logoutButton');

function redirectToLogin() {
    localStorage.removeItem('jwtToken');
    window.location.href = '/';
}

logoutButton.addEventListener('click', redirectToLogin);

// ========================================
// CARREGAR FILTROS
// ========================================

async function carregarVestibulares() {
    try {

        const response = await fetch('/vestibulares');

        if (!response.ok) {
            throw new Error('Erro ao buscar vestibulares');
        }

        vestibulares = await response.json();

        vestibularSelect.innerHTML = `
            <option value="">Todos</option>
        `;

        vestibulares.forEach(vestibular => {

            vestibularSelect.innerHTML += `
                <option value="${vestibular.id}">
                    ${`${vestibular.nome} - ${vestibular.sigla}`}
                </option>
            `;

        });

    } catch (erro) {
        console.error(erro);
    }
}

async function carregarTopicos() {
    try {

        const response = await fetch('/topico');

        if (!response.ok) {
            throw new Error('Erro ao buscar tópicos');
        }

        topicos = await response.json();

        topicoSelect.innerHTML = `
            <option value="">Todos</option>
        `;

        topicos.forEach(topico => {

            topicoSelect.innerHTML += `
                <option value="${topico.id_top}">
                    ${topico.nome_top}
                </option>
            `;
            console.log(topico);
        });

    } catch (erro) {
        console.error(erro);
    }
}

async function carregarMaterias() {
    try {

        const response = await fetch('/materia');

        if (!response.ok) {
            throw new Error('Erro ao buscar matérias');
        }

        materias = await response.json();

        materiaSelect.innerHTML = `
            <option value="">Todas</option>
        `;

        materias.forEach(materia => {

            materiaSelect.innerHTML += `
                <option value="${materia.id_mat}">
                    ${materia.nome_mat}
                </option>
            `;
            console.log(materia);
        });

    } catch (erro) {
        console.error(erro);
    }
}

// ========================================
// QUESTÕES
// ========================================

async function carregarQuestoes() {

    mostrarLoading();

    try {

        const response = await fetch('/questoes');

        if (!response.ok) {
            throw new Error('Erro ao carregar questões');
        }

        todasQuestoes = await response.json();

        console.log("QUESTÕES:", todasQuestoes);

        renderizarQuestoes(todasQuestoes);

    } catch (erro) {

        console.error(erro);
        mostrarErro('Erro ao carregar questões.');

    }
}

// ========================================
// FILTRO
// ========================================

function filtrarQuestoes() {

    const vestibular = vestibularSelect.value;
    const topico = topicoSelect.value;
    const materia = materiaSelect.value;

    console.log("Vestibular:", vestibular);
    console.log("Topico:", topico);
    console.log("Materia:", materia);

    let resultado = [...todasQuestoes];

    if (vestibular) {

        const vestibularSelecionado = vestibulares.find(
            v => String(v.id) === vestibular
        );

        if (vestibularSelecionado) {

            resultado = resultado.filter(
                q => q.vestibular === vestibularSelecionado.nome
            );
        }
    }

    if (topico) {

        const topicoSelecionado = topicos.find(
            t => String(t.id_top) === topico
        );

        if (topicoSelecionado) {

            resultado = resultado.filter(
                q => q.topico === topicoSelecionado.nome_top
            );
        }
    }

    if (materia) {

        const materiaSelecionada = materias.find(
            m => String(m.id_mat) === materia
        );

        if (materiaSelecionada) {

            resultado = resultado.filter(
                q => q.materia === materiaSelecionada.nome_mat
            );
        }
    }

    console.log("Resultado:", resultado);

    renderizarQuestoes(resultado);
}

// ========================================
// RENDERIZAÇÃO
// ========================================

function renderizarQuestoes(lista) {

    if (!lista.length) {

        questoesContainer.innerHTML = `
            <div class="sem-questoes">
                Nenhuma questão encontrada.
            </div>
        `;

        return;
    }

    questoesContainer.innerHTML = lista.map(questao => `

        <div class="questao-box">

            <div class="tags">

                <span>
                    ${questao.vestibular || ''}
                </span>

                <span>
                    ${questao.ano || ''}
                </span>

                <span>
                    ${questao.topico || ''}
                </span>

                <span>
                    ${questao.materia || ''}
                </span>

                <span>
                    ${questao.dificuldade || ''}
                </span>

            </div>

            <div class="questao-card">

                <div class="enunciado">
                    ${questao.enunciado || ''}
                </div>

                ${
                    questao.imagem_url
                        ? `<img src="${questao.imagem_url}" class="imagem-questao">`
                        : ''
                }

                <div class="alternativas">

                    <button class="alternativa">
                        ${questao.alt_a || ''}
                    </button>

                    <button class="alternativa">
                        ${questao.alt_b || ''}
                    </button>

                    <button class="alternativa">
                        ${questao.alt_c || ''}
                    </button>

                    <button class="alternativa">
                        ${questao.alt_d || ''}
                    </button>

                    ${
                        questao.alt_e
                            ? `
                                <button class="alternativa">
                                    ${questao.alt_e}
                                </button>
                            `
                            : ''
                    }

                </div>

                <button
                    id="btn-resposta-${questao.idq}"
                    class="btn-resposta"
                    onclick="mostrarResposta(${questao.idq})"
                >
                    VER RESPOSTA
                </button>
                <div
                    id="resposta-${questao.idq}"
                    class="caixa-resposta"
                ></div>

            </div>

        </div>

    `).join('');
}

// ========================================
// RESPOSTA
// ========================================

async function mostrarResposta(id) {

    const caixa = document.getElementById(`resposta-${id}`);
    const botao = document.getElementById(`btn-resposta-${id}`);

    if (caixa.style.display === "block") {

        caixa.style.display = "none";
        botao.textContent = "VER RESPOSTA";

        return;
    }

    try {

        const response = await fetch(`/questoes/${id}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar resposta');
        }

        const resp = await response.json();

        console.log(resp);

        caixa.innerHTML = `
            <div class="resposta-conteudo">

                <h3>Resposta Correta</h3>

                <p>${resp.resp_correta}</p>

                <hr>

                <p>${resp.explicacao_prof || ''}</p>

            </div>
        `;

        caixa.style.display = "block";

        botao.textContent = "OCULTAR RESPOSTA";

    } catch (erro) {

        console.error(erro);

    }
}

// ========================================
// EVENTOS
// ========================================

document.addEventListener('DOMContentLoaded', async () => {

    await Promise.all([
        carregarVestibulares(),
        carregarTopicos(),
        carregarMaterias()
    ]);

    await carregarQuestoes();

    btnBuscar.addEventListener(
        'click',
        filtrarQuestoes
    );

});