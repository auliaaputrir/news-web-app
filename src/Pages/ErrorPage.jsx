import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from '../components/HeaderElements/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ErrorPage() {
    const error = useRouteError()
    const navigate = useNavigate() //untuk kembali ke route '/'
    return (
        <>
            <Header />

            <div className="flex justify-center min-h-screen items-center flex-col">
                <img className='max-w-16' src="./src/assets/error-logo.png" alt="" />
                <h1 className="text-3xl font-bold">Oops!</h1>
                <p className="my-2 text-xl">Sorry, this page isn't available</p>
                <p className="text-lg">The page you're looking for is {error.statusText || error.message} </p>
                <button onClick={() => navigate('/')} className='bg-black text-white mt-2 p-4 rounded-lg font-bold hover:bg-slate-900 hover:ring-offset-2 hover:ring-2'> <span className='pr-2'><FontAwesomeIcon icon={faArrowLeft} /></span>Go Back Home</button>
            </div>
        </>

    )
}