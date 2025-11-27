import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const endpoint = isRegister ? '/auth/register' : '/auth/login';
            const payload = isRegister ? { email, password, displayName } : { email, password };
            const { data } = await axios.post(`${API_URL}${endpoint}`, payload);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
            window.location.reload();
        } catch (error) {
            alert('Error: ' + ((error as any).response?.data?.message || 'Unknown error'));
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="card" style={{ width: '300px' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--primary)' }}>Lex Moscua</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {isRegister && (
                        <input
                            className="input"
                            placeholder="Display Name"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        {isRegister ? 'Register' : 'Login'}
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px', cursor: 'pointer', color: 'var(--secondary)' }} onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Already have an account? Login' : 'New here? Register'}
                </p>
            </div>
        </div>
    );
}
