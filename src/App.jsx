import { Route, Routes, BrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Dashboard } from './pages/Dashboard';
import { NovoAgendamento } from './pages/NovoAgendamento';
import { FichaPet } from './pages/FichaPet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* página principal */}
          <Route path="agendamentos/novo" element={<NovoAgendamento />} /> {/* aceita ?petId=1 */}
          <Route path="pets/:id" element={<FichaPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
