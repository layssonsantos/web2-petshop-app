import { useParams } from 'react-router';

// Página provisória só pra rota /pets/:id já funcionar.
// Quem fez a Ficha do Pet substitui pelo conteúdo da tela.
export function FichaPet() {
    const { id } = useParams();

    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-body-md text-on-surface-variant">Ficha do pet {id} em construção.</p>
        </main>
    );
}
