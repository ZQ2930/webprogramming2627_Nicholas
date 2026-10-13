import { useNavigate } from 'react-router-dom';
export default function Berita() {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '20px' }}>
        <h2>Berita</h2>
        <p>
            Dalam pengerjaan.
        </p>
        <button onClick={() => navigate('/')}>
            Kembali ke Beranda
        </button>
        </div>
    );
}