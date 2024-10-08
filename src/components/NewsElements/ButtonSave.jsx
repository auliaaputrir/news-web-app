import Button from "../Elements/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
export default function BtnSave(props){
    function handleSave(){
        console.log('saved');
    }
    return(
        <Button onClick={handleSave} clasname='bg-white'><span><FontAwesomeIcon icon={faBookmark} /></span></Button>
    )
    
}