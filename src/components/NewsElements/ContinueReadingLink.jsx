import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ContinueReading() {
    return (
        <a href='' target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Continue Reading
            <span className="mt-2 mb-1 pl-1" ><FontAwesomeIcon icon={faArrowRight} /></span>
        </a>
    )
}