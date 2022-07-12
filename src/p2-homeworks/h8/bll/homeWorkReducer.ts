import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return state.map(el => ({...el})).sort((a, b) => a.name.localeCompare(b.name));
            }
            if (action.payload === 'down') {
                return state.map(el => ({...el})).sort((a, b) => b.name.localeCompare(a.name));
            } else return state
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}