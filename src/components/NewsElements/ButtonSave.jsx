// src/components/BtnSave.jsx
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import Button from '../Elements/Button';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons/faNetworkWired';

export default function BtnSave(props) {
    const { news } = props; // news adalah objek satuan berita dengan id
    const [savedNews, setSavedNews] = useState(() => {
        const storedNews = localStorage.getItem('news-saved');
        return storedNews ? JSON.parse(storedNews) : [];
    });

    // Update state dari local storage saat komponen dimuat
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('news-saved') || '[]');
        setSavedNews(saved);
    }, []);

    // Simpan ke local storage setiap kali savedNews berubah
    useEffect(() => {
        localStorage.setItem('news-saved', JSON.stringify(savedNews));
    }, [savedNews]);

    // Mengecek apakah item sudah disimpan
    function handleSave() {
        const isAlreadySaved = savedNews.some(item => item.id === news.id); // Cek apakah berita sudah disimpan
        
        if (!isAlreadySaved) {
            // Menambahkan berita ke savedNews
            setSavedNews(prev => [...prev, news]); // Menambahkan berita ke dalam daftar savedNews
        } else {
            // Menghapus hanya item yang diklik
            setSavedNews(prev => prev.filter(item => item.id !== news.id)); // Menghapus item yang diklik
        }
    }

    return (
        <div>
            <Button onClick={handleSave} className='bg-black text-white rounded-lg mr-4'>
                <span>
                    <FontAwesomeIcon icon={savedNews.some(item => item.id === news.id) ? solidBookmark : regularBookmark} />
                </span>
            </Button>
        </div>
    );
}