import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default function Lesson() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [exercises, setExercises] = React.useState<any[]>([]);
    const [currentIdx, setCurrentIdx] = React.useState(0);

    React.useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem('token');
            try {
                const { data } = await axios.get(`${API_URL}/lessons/${id}/exercises`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setExercises(data);
            } catch (e) {
                console.error(e);
            }
        };
        fetch();
    }, [id]);

    if (exercises.length === 0) return <div>Loading...</div>;

    const exercise = exercises[currentIdx];

    const handleNext = () => {
        if (currentIdx < exercises.length - 1) setCurrentIdx(currentIdx + 1);
        else navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>{exercise.title || 'Exercise'}</h2>
            {/* Placeholder: render based on type */}
            <button className="btn btn-primary" onClick={handleNext}>Next</button>
        </div>
    );
}
