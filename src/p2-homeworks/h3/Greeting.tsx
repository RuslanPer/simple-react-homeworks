import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error === '' ? s.input : s.input + ' ' + s.error
    const buttonDisabled = error !== ''

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser(name)
        }
    }

    return (
        <div className={s.inputWrap}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={onKeyDownHandler}
                   className={inputClass}/>
            <button onClick={() => addUser(name)}
                    disabled={buttonDisabled}
                    className={s.buttonAdd}>add
            </button>
            <span>{totalUsers}</span>
            <span className={s.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
