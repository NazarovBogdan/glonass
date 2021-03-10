// Style
import style from './TargetLink.module.scss'
// RRD
import { Link } from 'react-router-dom'


function TargetLink(props) {
    return (
        <Link
            className={style.targetLink}
            {...props}
        >
            {props.children}
        </Link>
    )
}



export default TargetLink