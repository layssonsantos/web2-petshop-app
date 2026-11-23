import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { atualizarPet, buscarPet, criarAgendamento, criarPet, encontrarPet } from '../services/api';
import { ESPECIES, SERVICOS, dataDeHoje } from '../services/constantes';

// Classes repetidas em vários campos ficam guardadas aqui pra não copiar a mesma linha várias vezes
const classeRotulo = 'block text-label-lg font-semibold text-on-surface mb-2';
const classeCampo =
    'w-full h-12 px-4 bg-surface-container-lowest text-body-lg text-on-surface rounded-sm border border-outline-variant placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors';
const classeSelect =
    'w-full h-12 pl-4 pr-10 appearance-none bg-surface-container-lowest text-body-lg text-on-surface rounded-sm border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer';
const classeChip =
    'h-8 px-3 flex items-center gap-1 rounded-sm border border-outline-variant text-label-lg font-semibold text-on-surface-variant cursor-pointer transition-colors hover:bg-surface has-checked:bg-secondary-container has-checked:border-secondary-container has-checked:text-on-secondary-container has-focus-visible:ring-2 has-focus-visible:ring-primary';

export function NovoAgendamento() {
    const navigate = useNavigate();
    const [parametros] = useSearchParams();
    const petId = parametros.get('petId'); // vem do botão "Agendar" da ficha: /agendamentos/novo?petId=1

    const [formulario, setFormulario] = useState(() => ({
        nomePet: '',
        nomeTutor: '',
        especie: '',
        servico: '',
        data: dataDeHoje(),
        horario: '',
        status: 'agendado',
        observacoes: '',
    }));
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState('');

    // Se veio da ficha do pet, já preenche os dados dele
    useEffect(() => {
        if (!petId) return;

        buscarPet(petId)
            .then((pet) => {
                setFormulario((atual) => ({
                    ...atual,
                    nomePet: pet.nome,
                    nomeTutor: pet.tutor,
                    especie: pet.especie,
                    observacoes: pet.observacoes ?? '',
                }));
            })
            .catch(() => setErro('Não foi possível carregar os dados do pet.'));
    }, [petId]);

    // Uma função só pra todos os campos: usa o "name" do campo pra saber o que mudar
    function alterarCampo(evento) {
        const { name, value } = evento.target;
        setFormulario((atual) => ({ ...atual, [name]: value }));
    }

    async function salvar(evento) {
        evento.preventDefault(); // impede o navegador de recarregar a página
        setSalvando(true);
        setErro('');

        const observacoes = formulario.observacoes.trim();

        try {
            // 1. Usa o pet que já existe ou cadastra um novo
            let pet = await encontrarPet(formulario.nomePet, formulario.nomeTutor);

            if (!pet) {
                pet = await criarPet({
                    nome: formulario.nomePet.trim(),
                    especie: formulario.especie,
                    tutor: formulario.nomeTutor.trim(),
                    telefone: '',
                    observacoes,
                    clienteDesde: dataDeHoje().slice(0, 7),
                });
            } else if (observacoes) {
                await atualizarPet(pet.id, { observacoes });
            }

            // 2. Cria o agendamento ligado a esse pet
            await criarAgendamento({
                petId: pet.id,
                servico: formulario.servico,
                data: formulario.data,
                horario: formulario.horario,
                status: formulario.status,
                valor: SERVICOS[formulario.servico].valor,
                observacoes,
            });

            navigate('/');
        } catch {
            setErro('Não foi possível salvar o agendamento. Confira se o servidor está rodando (npm run server).');
            setSalvando(false);
        }
    }

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
                <Link
                    to="/"
                    className="w-fit text-label-lg font-semibold text-primary hover:opacity-80 flex items-center gap-2 mb-3 transition-opacity"
                >
                    <span className="material-icons text-base">arrow_back</span>
                    Voltar ao dashboard
                </Link>
                <h1 className="text-title-lg font-semibold text-on-surface">Novo agendamento</h1>
                <p className="text-body-md text-on-surface-variant mt-1">Preencha os dados do pet e do serviço</p>
            </div>

            <form onSubmit={salvar} className="flex flex-col gap-4">
                {/* CARD 1: INFORMAÇÕES DO CLIENTE */}
                <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-icons text-lg text-primary">pets</span>
                        <h2 className="text-title-md font-bold text-primary">Informações do cliente</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nomePet" className={classeRotulo}>
                                Nome do pet <span className="text-error">*</span>
                            </label>
                            <input
                                type="text"
                                id="nomePet"
                                name="nomePet"
                                required
                                placeholder="Ex: Paçoca"
                                value={formulario.nomePet}
                                onChange={alterarCampo}
                                className={classeCampo}
                            />
                        </div>

                        <div>
                            <label htmlFor="nomeTutor" className={classeRotulo}>
                                Nome do tutor <span className="text-error">*</span>
                            </label>
                            <input
                                type="text"
                                id="nomeTutor"
                                name="nomeTutor"
                                required
                                placeholder="Ex: Ana Ribeiro"
                                value={formulario.nomeTutor}
                                onChange={alterarCampo}
                                className={classeCampo}
                            />
                        </div>
                    </div>

                    {/* Os chips são gerados a partir da lista ESPECIES, em vez de escrever os quatro na mão */}
                    <fieldset>
                        <legend className="text-label-lg font-semibold text-on-surface mb-2">
                            Espécie <span className="text-error">*</span>
                        </legend>

                        <div className="flex flex-wrap gap-2">
                            {Object.entries(ESPECIES).map(([valor, nome]) => (
                                <label key={valor} className={classeChip}>
                                    <input
                                        type="radio"
                                        name="especie"
                                        value={valor}
                                        required
                                        checked={formulario.especie === valor}
                                        onChange={alterarCampo}
                                        className="peer sr-only"
                                    />
                                    <span className="hidden peer-checked:flex">
                                        <span className="material-icons text-lg">check</span>
                                    </span>
                                    {nome}
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </section>

                {/* CARD 2: DETALHES DO SERVIÇO */}
                <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-icons text-lg text-primary">favorite</span>
                        <h2 className="text-title-md font-bold text-primary">Detalhes do serviço</h2>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="servico" className={classeRotulo}>
                            Tipo de serviço <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id="servico"
                                name="servico"
                                required
                                value={formulario.servico}
                                onChange={alterarCampo}
                                className={classeSelect}
                            >
                                <option value="" disabled>
                                    Selecione o serviço
                                </option>
                                {Object.entries(SERVICOS).map(([valor, servico]) => (
                                    <option key={valor} value={valor}>
                                        {servico.nome}
                                    </option>
                                ))}
                            </select>
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                                expand_more
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="data" className={classeRotulo}>
                                Data <span className="text-error">*</span>
                            </label>
                            <input
                                type="date"
                                id="data"
                                name="data"
                                required
                                value={formulario.data}
                                onChange={alterarCampo}
                                className={classeCampo}
                            />
                        </div>

                        <div>
                            <label htmlFor="horario" className={classeRotulo}>
                                Horário <span className="text-error">*</span>
                            </label>
                            <input
                                type="time"
                                id="horario"
                                name="horario"
                                required
                                value={formulario.horario}
                                onChange={alterarCampo}
                                className={classeCampo}
                            />
                        </div>

                        <div>
                            <label htmlFor="status" className={classeRotulo}>
                                Status inicial
                            </label>
                            <div className="relative">
                                <select
                                    id="status"
                                    name="status"
                                    value={formulario.status}
                                    onChange={alterarCampo}
                                    className={classeSelect}
                                >
                                    <option value="agendado">Agendado</option>
                                    <option value="em_andamento">Em andamento</option>
                                </select>
                                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                                    expand_more
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="observacoes" className={classeRotulo}>
                            Observações
                        </label>
                        <textarea
                            id="observacoes"
                            name="observacoes"
                            rows="3"
                            placeholder="Alergias, comportamento, cuidados especiais..."
                            value={formulario.observacoes}
                            onChange={alterarCampo}
                            className="w-full p-4 bg-surface-container-lowest text-body-lg text-on-surface rounded-sm border border-outline-variant placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        />
                    </div>
                </section>

                {erro && (
                    <p className="border border-error text-error bg-surface-container-lowest rounded-sm p-4 text-body-md">
                        {erro}
                    </p>
                )}

                <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-2">
                    <Link
                        to="/"
                        className="border border-outline-variant bg-surface-container-lowest hover:bg-surface text-primary px-5 py-2.5 rounded-full text-label-lg font-semibold text-center transition-colors"
                    >
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={salvando}
                        className="bg-primary hover:bg-primary/90 text-on-primary px-5 py-2.5 rounded-full text-label-lg font-semibold text-center transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                    >
                        {salvando ? 'Salvando...' : 'Salvar agendamento'}
                    </button>
                </div>
            </form>
        </main>
    );
}
