import { useState } from 'react';
import search, { searchNews } from '../api/search'
export default function Search() {
    const [key, setKey] = useState('')
    async function search (q){
        if (q.length > 2){       
            const query = await searchNews(q);
            console.log(query);
        }
        
    }
    return (

        <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            onChange={({target}) => search(target.value)}
        />
    )
}