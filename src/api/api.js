import axios from 'axios'

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
const baseUrl = import.meta.env.VITE_CURRENCY_BASE_URL;
let data;

export async function fetchIndonesia() {
    
    try {
        const res= await axios({
            method: "GET",
            url: `${baseUrl}search/v2/articlesearch.json`,
            params: {
                q: 'indonesia',
                'api-key': `${apiKey}`

            }
        })
        data = res.data.response.docs ;

    }
    catch (err) {
        console.log(err);

    }
    return data;
}

export async function fetchProgramming() {
    try {
        const res= await axios({
            method: "GET",
            url: `${baseUrl}search/v2/articlesearch.json`,
            params: {
                q: 'programming',
                'api-key': `${apiKey}`

            }
        })
        data = res.data.response.docs ? res.data.response.docs : [] ;

    }
    catch (err) {
        console.log(err);

    }
    return data;
}
export async function searchNews(q) {
    try {
        const res= await axios({
            method: "GET",
            url: `${baseUrl}/search/v2/articlesearch.json`,
            params: {
                q: q,
                'api-key': `${apiKey}`

            }
        })
        data = res.data.response.docs ? res.data.response.docs : [] ;

    }
    catch (err) {
        console.log(err);

    }
    return data;
}

