export function Dashboard() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Cabeçalho da Página */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-headline-sm font-bold text-on-surface">Atendimentos de hoje</h1>
                        <p className="text-body-md font-normal text-on-surface-variant mt-1">(Data atual)</p>
                    </div>
                    {/* Botão Responsivo (FAB no celular | Normal no desktop) */}
                    <a
                        href="Agendamento.html"
                        className="fixed bottom-6 right-6 sm:static z-50 bg-primary hover:bg-primary/90 text-on-primary px-4 py-4 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full text-label-lg font-semibold shadow-lg sm:shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <span className="text-2xl sm:text-xl font-bold leading-none">+</span>
                        <span className="hidden sm:inline">Novo Agendamento</span>
                    </a>
                </div>

                {/* CARDS DE MÉTRICAS (RESPONSIVIDADE: 1 col no mobile, 2 col no tablet, 4 col no desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {/* Card 1: Banhos hoje */}
                    <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                            <span className="material-icons text-2xl">water_drop</span>
                        </div>
                        <div>
                            <p className="text-body-md font-normal text-on-surface-variant">Banhos hoje</p>
                            <p className="text-headline-sm font-bold text-on-surface">8</p>
                        </div>
                    </div>

                    {/* Card 2: Consultas veterinárias */}
                    <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                            <span className="material-icons text-2xl">favorite</span>
                        </div>
                        <div>
                            <p className="text-body-md font-normal text-on-surface-variant">Consultas hoje</p>
                            <p className="text-headline-sm font-bold text-on-surface">3</p>
                        </div>
                    </div>

                    {/* Card 3: Vacinações */}
                    <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-success-container text-on-success-container flex items-center justify-center shrink-0">
                            <span className="material-icons text-2xl">verified_user</span>
                        </div>
                        <div>
                            <p className="text-body-md font-normal text-on-surface-variant">Vacinações</p>
                            <p className="text-headline-sm font-bold text-on-surface">5</p>
                        </div>
                    </div>

                    {/* Card 4: Receita estimada (Usando a cor cinza definida no seu CSS) */}
                    <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
                            <span className="material-icons text-2xl">attach_money</span>
                        </div>
                        <div>
                            <p className="text-body-md font-normal text-on-surface-variant">Receita estimada</p>
                            <p className="text-headline-sm font-bold text-on-surface">R$ 1.250</p>
                        </div>
                    </div>
                </div>

                {/* CONTAINER DA TABELA (CARD) */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden mb-8">
                    {/* Tabela Responsiva com Scroll Lateral apenas no Mobile */}
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-left min-w-150">
                            {/* Sequência: Pet, Tutor, Serviço, Horário, Status */}
                            <thead className="bg-surface border-b border-outline-variant">
                                <tr>
                                    <th className="px-5 py-3.5 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                                        Pet
                                    </th>
                                    <th className="px-5 py-3.5 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                                        Tutor
                                    </th>
                                    <th className="px-5 py-3.5 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                                        Serviço
                                    </th>
                                    <th className="px-5 py-3.5 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                                        Horário
                                    </th>
                                    <th className="px-5 py-3.5 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            {/* Corpo da Tabela */}
                            <tbody className="divide-y divide-outline-variant">
                                {/* Linha 1: Thor (Agendado) */}
                                <tr className="hover:bg-surface transition-colors">
                                    <td className="px-5 py-4 text-body-md font-bold text-on-surface">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-bold flex items-center justify-center shrink-0">
                                                Th
                                            </div>
                                            <span>
                                                <a href="FichaPet.html" className="hover:text-primary transition-colors">
                                                    Thor
                                                </a>{' '}
                                                <span className="text-label-sm font-normal text-on-surface-variant">(Cão)</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">Carlos Eduardo</td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">Banho &amp; Tosa</td>
                                    <td className="px-5 py-4 text-body-md font-semibold text-on-surface whitespace-nowrap">14:30</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-bold bg-primary-container text-on-primary-container whitespace-nowrap">
                                            AGENDADO
                                        </span>
                                    </td>
                                </tr>

                                {/* Linha 2: Luna (Em Andamento) */}
                                <tr className="hover:bg-surface transition-colors">
                                    <td className="px-5 py-4 text-body-md font-bold text-on-surface">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-bold flex items-center justify-center shrink-0">
                                                Lu
                                            </div>
                                            <span>
                                                Luna{' '}
                                                <span className="text-label-sm font-normal text-on-surface-variant">(Gato)</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">Mariana Costa</td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">Consulta Veterinária</td>
                                    <td className="px-5 py-4 text-body-md font-semibold text-on-surface whitespace-nowrap">15:15</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-bold bg-tertiary-container text-on-tertiary-container whitespace-nowrap">
                                            EM ANDAMENTO
                                        </span>
                                    </td>
                                </tr>

                                {/* Linha 3: Mel (Concluído) */}
                                <tr className="hover:bg-surface transition-colors">
                                    <td className="px-5 py-4 text-body-md font-bold text-on-surface">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-bold flex items-center justify-center shrink-0">
                                                Me
                                            </div>
                                            <span>
                                                Mel{' '}
                                                <span className="text-label-sm font-normal text-on-surface-variant">(Cão)</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">João Pedro</td>
                                    <td className="px-5 py-4 text-body-md font-normal text-on-surface">Vacinação V10</td>
                                    <td className="px-5 py-4 text-body-md font-semibold text-on-surface whitespace-nowrap">16:00</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-bold bg-success-container text-on-success-container whitespace-nowrap">
                                            CONCLUÍDO
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </main>
    );
}
