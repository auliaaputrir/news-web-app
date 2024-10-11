import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../../services/api';

export default function Search() {
    const navigate = useNavigate(); // Inisialisasi useNavigate
    const [input, setInput] = useState('');

    async function search(q) {
        if (q.length > 2) {
            const query = await fetchNews(q);
            console.log(query);
        }
    }

    function handleChange(e) {
        const newValue = e.target.value;
        setInput(newValue);
        search(newValue); // Memanggil search setiap kali input berubah
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            navigate(`/search?query=${encodeURIComponent(input)}`); // Navigasi ke halaman pencarian
        }
    }

    return (
        <input
            type="text"
            id="Search"
            placeholder="Search for anything..."
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-60 border border-slate-300 rounded-md py-3 pl-4 pr-3 shadow-sm focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Menambahkan event handler untuk key down
            value={input} // Menambahkan value untuk mengikat state
        />
    );
}
