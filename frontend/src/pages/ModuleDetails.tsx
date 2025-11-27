import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react';

const API_URL = 'http://localhost:3000/api';

export default function ModuleDetails() {
    const { id } = useParams();
    const [module, setModule] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchModule = async () => {
            const token = localStorage.getItem('token');
            try {
                const { data } = await axios.get(`${API_URL}/modules/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setModule(data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchModule();
    }, [id]);

    if (!module) return <div>Loading...</div>;

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{module.title}</h1>
            <p style={{ textAlign: 'center', color: 'var(--gray-dark)' }}>{module.description}</p>

            <div className="grid-modules">
                {module.lessons.map((lesson: any) => (
                    <div
                        key={lesson.id}
                        className="card"
                        style={{ width: '100%', maxWidth: '400px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', opacity: lesson.status === 'locked' ? 0.5 : 1 }}
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                    >
                        <div className={`module-node ${lesson.isCompleted ? 'completed' : ''}`} style={{ width: '60px', height: '60px', background: lesson.isCompleted ? 'var(--warning)' : 'var(--primary)' }}>
                            {lesson.isCompleted ? <CheckCircle size={28} /> : <Star size={28} />}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold' }}>{lesson.title}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--gray-dark)' }}>{lesson.description}</div>
                        </div>
                        <div style={{ fontWeight: 'bold', color: 'var(--warning)' }}>{lesson.xpReward} XP</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
