import axios from 'axios'

const apiKey = process.env.VITE_CURRENCY_API_KEY;
const baseUrl = process.env.VITE_CURRENCY_BASE_URL;
let data;

export async function fetchIndonesia() {
    try {
        const res = await axios({
            method: "GET",
            url: `${baseUrl}search/v2/articlesearch.json`,
            params: {
                q: 'indonesia',
                'api-key': `${apiKey}`
            }
        });
        const data = res.data.response.docs; // Deklarasikan 'data' dengan 'const'
        console.log(data);
        return data; // Pindahkan return ke dalam try block
    }
    catch (err) {
        console.log(err);
        return []; // Atau nilai default lainnya jika terjadi error
    }
}


export async function fetchProgramming() {
    const endDate = new Date();

    // Mengurangi 1 bulan dari tanggal akhir untuk mendapatkan tanggal awal (begin date)
    const beginDate = new Date();
    beginDate.setMonth(endDate.getMonth() - 1);
    
    // Format tanggal ke dalam format YYYYMMDD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };
    
    try {
        const res = await axios({
            method: "GET",
            url: `${baseUrl}search/v2/articlesearch.json`,
            params: {
                q: 'programming',
                'api-key': `${apiKey}`,
                fq: 'section_name:("technology")',
                begin_date: formatDate(beginDate),
                end_date: formatDate(endDate)
            }
        });
        data = res.data.response.docs ? res.data.response.docs : [];
    }
    catch (err) {
        console.log(err);
    }
    return data;
}

export async function fetchNews(q) {
    try {
        const res = await axios({
            method: "GET",
            url: `${baseUrl}/search/v2/articlesearch.json`,
            params: {
                q: q,
                'api-key': `${apiKey}`

            }
        })
        data = res.data.response.docs ? res.data.response.docs : [];
        console.log(q);

    }
    catch (err) {
        console.log(err);

    }
    return data;
}

