import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.css'
import './Affairs.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <>
            <span className={s.affairName}>{props.affair.name}</span>
            <span className={'priority_' + props.affair.priority}>
                [{props.affair.priority}]
            </span>
            <button className={s.affairBtnDelete} onClick={deleteCallback}>X</button>
        </>
    )
}

export default Affair
