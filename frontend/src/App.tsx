import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ModuleDetails from './pages/ModuleDetails';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import './index.css';

const isAuthenticated = () => !!localStorage.getItem('token');

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                {isAuthenticated() && <Navbar />}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/module/:id" element={<ProtectedRoute><ModuleDetails /></ProtectedRoute>} />
                    <Route path="/lesson/:id" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
                    <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
