// Style
import style from './TargetLink.module.scss'
// RRD
import { Link } from 'react-router-dom'
import { useState } from 'react'


function TargetLink(props) {
    const [tag, setTag] = useState(null)

    if (props.tag == 'a') {
        return (
            <a
                className={style.targetLink}
                {...props}
            >
                {props.children}
            </a>
        )
    }
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