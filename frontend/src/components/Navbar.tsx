import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '2px solid var(--gray)' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>Lex Moscua</Link>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                {user.role === 'ADMIN' && <Link to="/admin" style={{ color: 'var(--text)', textDecoration: 'none' }}>Admin</Link>}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={logout}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </div>
            </div>
        </nav>
    );
}
