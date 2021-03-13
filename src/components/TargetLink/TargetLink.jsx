// Style
import style from './TargetLink.module.scss'
// RRD
import { Link } from 'react-router-dom'


function TargetLink(props) {
    return (
        <Link
            className={style.targetLink}
            to={props.to}
            {...props}
        >
            {props.children}
        </Link>
    )
}



export default TargetLink