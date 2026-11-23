// Valores fixos usados por todas as telas.
// A chave (banho_tosa, cao, agendado...) é o que fica salvo no db.json.

export const SERVICOS = {
    banho_tosa: {
        nome: 'Banho & Tosa',
        valor: 60,
        icone: 'water_drop',
        cor: 'bg-primary-container text-on-primary-container',
    },
    consulta: {
        nome: 'Consulta veterinária',
        valor: 150,
        icone: 'favorite',
        cor: 'bg-tertiary-container text-on-tertiary-container',
    },
    vacinacao: {
        nome: 'Vacinação',
        valor: 90,
        icone: 'verified_user',
        cor: 'bg-success-container text-on-success-container',
    },
};

export const STATUS = {
    agendado: {
        nome: 'Agendado',
        cor: 'bg-primary-container text-on-primary-container',
    },
    em_andamento: {
        nome: 'Em andamento',
        cor: 'bg-tertiary-container text-on-tertiary-container',
    },
    concluido: {
        nome: 'Concluído',
        cor: 'bg-success-container text-on-success-container',
    },
};

export const ESPECIES = {
    cao: 'Cão',
    gato: 'Gato',
    ave: 'Ave',
    outro: 'Outro',
};

// Data de hoje no formato do input date (AAAA-MM-DD), no fuso do computador.
// Não dá pra usar toISOString() porque ele converte pra UTC e depois das 21h já vira o dia seguinte.
export function dataDeHoje() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

// "2026-11-23" vira "23/11/2026"
export function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

// 1250 vira "R$ 1.250"
export function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}
