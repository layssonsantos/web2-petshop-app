import { Link } from 'react-router';


// renderiza a barra superior comum do app
export function Navbar() {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* 1. Logo e Nome do App (Visível em todos os tamanhos) */}
        <div className="flex items-center gap-3">
          {/* Ícone de Menu Hambúrguer (Mobile) */}
          <button
            type="button"
            className="sm:hidden text-primary flex items-center justify-center p-1 -ml-1"
          >
            <span className="material-icons text-2xl">menu</span>
          </button>

          {/* Logo com Link para o Dashboard */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="w-9 h-9 rounded-md bg-primary text-on-primary flex items-center justify-center shrink-0">
              <span className="material-icons text-xl">pets</span>
            </span>
            <span className="text-title-lg font-bold text-primary tracking-tight">PetCare</span>
          </Link>
        </div>

        {/* 2. Campo de Busca (Escondido no celular < 640px | Visível a partir de sm:) */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-on-surface-variant text-sm">🔍</span>
            <input
              type="text"
              placeholder="Buscar pet, tutor ou serviço..."
              className="w-full bg-surface text-body-md pl-9 pr-4 py-2 rounded-full border border-outline-variant text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* 3. Área de Perfil */}
        <div className="flex items-center gap-3">
          {/* Nome e Cargo: Oculto no Celular e Tablet (< 1024px) | Visível apenas no Desktop (lg:) */}
          <div className="text-right hidden lg:block">
            <p className="text-label-lg font-semibold text-on-surface">Dr. Ana Silva</p>
            <p className="text-label-sm font-normal text-on-surface-variant">Veterinária</p>
          </div>

          {/* Avatar: Visível em TODOS os dispositivos */}
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container text-label-lg font-bold flex items-center justify-center border border-outline-variant/30 shrink-0">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
