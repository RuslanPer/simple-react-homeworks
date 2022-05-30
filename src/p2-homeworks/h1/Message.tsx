import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageWrap}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.message}>
                <h3 className={s.messageName}>{props.name}</h3>
                <p className={s.messageText}>{props.message}</p>
                <span className={s.messageTime}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
