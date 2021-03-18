// Style
import style from './TargetButton.module.scss'
// Smooth link
import AnchorLink from 'react-anchor-link-smooth-scroll'
// RRD
import { NavLink } from 'react-router-dom'



function TargetButton(props) {
    if (props.tag === 'a') {
        return (
            <a
                className={style.targetButton}
                {...props}
            >
                {props.children}
            </a>
        )
    }
    else if (props.tag === 'smooth') {
        return (
            <AnchorLink
                className={style.targetButton}
                {...props}
            >
                {props.children}
            </AnchorLink>
        )
    }
    else if (props.tag === 'nav') {
        return (
            <NavLink
                className={style.targetButton}
                {...props}
            >
                {props.children}
            </NavLink>
        )
    }

    return (
        <button
            className={style.targetButton}
            {...props}
        >
            {props.children}
        </button>
    )
}



export default TargetButton