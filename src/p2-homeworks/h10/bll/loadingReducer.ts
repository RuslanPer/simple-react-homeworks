const initState = {
	isLoading: false,
}

type initStateType = typeof initState

type LoadingActionType = {
	type: 'LOADING'
	isLoading: boolean
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (
	state: initStateType = initState,
	action: ActionType
): initStateType => {
	switch (action.type) {
		case 'LOADING': {
			return { ...state, isLoading: action.isLoading }
		}
		default:
			return state
	}
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
	return {
		type: 'LOADING',
		isLoading,
	}
}
