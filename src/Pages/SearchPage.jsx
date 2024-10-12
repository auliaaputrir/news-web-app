import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchNews } from '../services/api';
import CardItem from "../components/Fragments/CardItem";;
import SectionTitle from '../components/Fragments/SectionTitle'
import ButtonSave from "../components/Fragments/ButtonSave";


export default function SearchNews() {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const query = new URLSearchParams(location.search).get('query'); // Mengambil query dari URL
  const [news, setNews] = useState([]); // State untuk menyimpan berita
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menyimpan error


  useEffect(() => {
    // Jika tidak ada query
    if (!query) {
      navigate('/error');
      return; // Keluar dari useEffect
    }

    const fetchData = async () => {
      try {
        const result = await fetchNews(query); // Mengambil berita berdasarkan query
        setNews(result); // Mengupdate state dengan berita yang didapat
      } catch (err) {
        setError(err); // Menyimpan error jika terjadi
      } finally {
        setLoading(false); // Mengubah loading menjadi false setelah proses selesai
      }
    };

    fetchData();
  }, [query, navigate]); // Menggunakan query dan navigate sebagai dependency

  if (loading) return <p className='text-center'>Loading...</p>; // Menampilkan loading
  if (error) return <p className='text-center'>Error: {error.message}</p>; // Menampilkan pesan error

  return (
    <div>
      <SectionTitle>Search: {query}</SectionTitle>
      <div className="mt-14 w-full grid gap-2 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-6">
        {news.map((item) => (
          <CardItem key={item._id}>
            <CardItem.Image
              alt={`news-image-${item.headline?.main || 'default-headline'}`}
              src={
                item.multimedia && item.multimedia.length > 0 && item.multimedia[0].url
                  ? `https://www.nytimes.com/${item.multimedia[0].url}`
                  : null // Jika tidak ada URL, jangan tampilkan gambar
              }
            />
            <CardItem.Body
              headline={item.headline?.main || 'No Title Available'}
              href={item.web_url}
              item={item}
            >
              {item.abstract || 'No Description Available'}
              <div className="absolute bottom-0 right-0 mr-4 mb-8">

                <ButtonSave news={item} />
              </div>
            </CardItem.Body>
          </CardItem>
        ))}
      </div>
    </div>
  );
}
