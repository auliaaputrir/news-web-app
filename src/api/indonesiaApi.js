import axios from 'axios'


export async function fetchIndonesia() {
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
    const baseUrl = import.meta.env.VITE_CURRENCY_BASE_URL;
    let data;
    try {
        const res= await axios({
            method: "GET",
            url: `${baseUrl}/search/v2/articlesearch.json`,
            params: {
                q: 'indonesia',
                'api-key': `${apiKey}`

            }
        })
        data = res.data.response.docs;

    }
    catch (err) {
        console.log(err);

    }
    return data;
}