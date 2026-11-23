import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';

export function Layout() {
    return (
        <div className="min-h-screen bg-surface font-sans text-on-surface">
            <Navbar />
            <Outlet />
            <footer className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-on-surface-variant border-t border-outline-variant mt-8">
                <p>
                    Desenvolvido por{' '}
                    <strong className="text-on-surface font-semibold">
                        Luísa Tavares, Laysson Santos e Sérgio Felipe
                    </strong>{' '}
                    — Disciplina de Desenvolvimento Web 2
                </p>
            </footer>
        </div>
    );
}