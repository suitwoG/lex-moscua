import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [slug, setSlug] = useState('');
    const [topicCode, setTopicCode] = useState('');
    const [orderIndex, setOrderIndex] = useState(0);

    const createModule = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post(`${API_URL}/admin/modules`, {
                title, description, slug, topicCode, orderIndex, icon: 'book', color: 'blue'
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Module created!');
        } catch (e) {
            alert('Error creating module');
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <div className="card">
                <h3>Create Module</h3>
                <form onSubmit={createModule} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input className="input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <input className="input" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input className="input" placeholder="Slug" value={slug} onChange={e => setSlug(e.target.value)} />
                    <input className="input" placeholder="Topic Code" value={topicCode} onChange={e => setTopicCode(e.target.value)} />
                    <input className="input" type="number" placeholder="Order Index" value={orderIndex} onChange={e => setOrderIndex(Number(e.target.value))} />
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    );
}
