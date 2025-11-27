import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Book, ChevronRight } from 'lucide-react';

const API_URL = 'http://localhost:3000/api';

export default function Dashboard() {
    const [modules, setModules] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchModules = async () => {
            const token = localStorage.getItem('token');
            try {
                const { data } = await axios.get(`${API_URL}/modules`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setModules(data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchModules();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Learning Path</h1>
            <div className="grid-modules">
                {modules.map((mod) => (
                    <div key={mod.id} className="card" style={{ width: '100%', maxWidth: '400px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => navigate(`/module/${mod.id}`)}>
                        <div className="module-node" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                            <Book size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{mod.title}</div>
                            <div style={{ color: 'var(--gray-dark)' }}>{mod.description}</div>
                        </div>
                        <ChevronRight color="var(--gray-dark)" />
                    </div>
                ))}
            </div>
        </div>
    );
}
