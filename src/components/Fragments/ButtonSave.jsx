import Button from '../Elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSaveNews } from '../../redux/slice/saveSlice';

export default function ButtonSave(props) {
    const {news}= props
    const dispatch = useDispatch()
    const isSaved = useSelector(state => 
        state.save.data.some(item => item._id === news._id)
    );
    console.log(isSaved);
    return (
        <Button
            onClick={() => dispatch(toggleSaveNews(news))} // Menggunakan handleSave yang dipass dari parent
            className="bg-black text-white rounded-lg mr-4"
        >
            <span>
                <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
            </span>
        </Button>
    )
}