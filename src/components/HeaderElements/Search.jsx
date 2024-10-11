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
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Menambahkan event handler untuk key down
            value={input} // Menambahkan value untuk mengikat state
        />
    );
}
