import { Route, Routes, BrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* página principal */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;