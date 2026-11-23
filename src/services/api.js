// Todas as chamadas pro back-end ficam aqui, assim as telas só importam a função que precisam.
// O back-end é o json-server, que roda com "npm run server" e lê/grava o arquivo db.json.
const API_URL = 'http://localhost:3001';

async function requisicao(caminho, opcoes = {}) {
    const resposta = await fetch(`${API_URL}${caminho}`, {
        headers: { 'Content-Type': 'application/json' },
        ...opcoes,
    });

    if (!resposta.ok) {
        throw new Error(`Erro ${resposta.status} em ${caminho}`);
    }
    return resposta.json();
}

function enviar(metodo, caminho, dados) {
    return requisicao(caminho, { method: metodo, body: JSON.stringify(dados) });
}

// ---------- Pets ----------

export function listarPets() {
    return requisicao('/pets?_sort=nome');
}

// Busca por qualquer texto (nome do pet, tutor...). Usada na busca da navbar.
export function pesquisarPets(texto) {
    return requisicao(`/pets?q=${encodeURIComponent(texto)}`);
}

export function buscarPet(id) {
    return requisicao(`/pets/${id}`);
}

// Procura um pet pelo nome e pelo tutor, sem diferenciar maiúscula de minúscula.
// Retorna null se ainda não existir.
export async function encontrarPet(nome, tutor) {
    const pets = await listarPets();
    const normalizar = (texto) => texto.trim().toLowerCase();

    const pet = pets.find(
        (p) => normalizar(p.nome) === normalizar(nome) && normalizar(p.tutor) === normalizar(tutor),
    );
    return pet ?? null;
}

export function criarPet(pet) {
    return enviar('POST', '/pets', pet);
}

export function atualizarPet(id, campos) {
    return enviar('PATCH', `/pets/${id}`, campos);
}

// ---------- Agendamentos ----------
// O _expand=pet faz o json-server mandar junto os dados do pet de cada agendamento (agendamento.pet.nome etc.)

export function listarAgendamentos() {
    return requisicao('/agendamentos?_expand=pet&_sort=data,horario');
}

// data no formato AAAA-MM-DD
export function listarAgendamentosDoDia(data) {
    return requisicao(`/agendamentos?data=${data}&_expand=pet&_sort=horario`);
}

// Histórico do pet, do mais novo pro mais antigo
export function listarAgendamentosDoPet(petId) {
    return requisicao(`/agendamentos?petId=${petId}&_sort=data,horario&_order=desc,desc`);
}

export function criarAgendamento(agendamento) {
    return enviar('POST', '/agendamentos', agendamento);
}

export function atualizarStatus(id, status) {
    return enviar('PATCH', `/agendamentos/${id}`, { status });
}
