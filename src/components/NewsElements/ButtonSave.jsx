// src/components/BtnSave.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import Button from '../Elements/Button';

export default function BtnSave(props) {
    const { news } = props
    const [isSaved, setIsSaved] = useState(false);


    function handleSave() {
        const data = news.id

        if (localStorage.getItem(data)) {
            // Jika sudah ada di localStorage, berarti sedang tersimpan
            setIsSaved(false); // Membuat unsaved
            localStorage.removeItem(data); // Hapus dari localStorage
        } else {
            // Jika belum ada, berarti akan disimpan
            setIsSaved(true); // Membuat saved
            localStorage.setItem(data, JSON.stringify(news)); // Simpan ke localStorage
        }
    }

    return (
        <Button onClick={handleSave} classname='bg-black text-white rounded-lg mr-4'>
            <span className="">
                <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
            </span>
        </Button>
    );
}
