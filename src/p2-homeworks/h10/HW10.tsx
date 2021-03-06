import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer'
import { AppStoreType } from './bll/store'
import Spinner from './Spinner'

function HW10() {
	const loading = useSelector<AppStoreType, boolean>(
		state => state.loading.isLoading
	)
	const dispatch = useDispatch()

	const setLoading = () => {
		dispatch(loadingAC(true))
		setTimeout(() => dispatch(loadingAC(false)), 2000)
	}

	return (
		<div>
			homeworks 10
			{loading ? (
				<div>
					<Spinner />
				</div>
			) : (
				<div>
					<SuperButton onClick={setLoading}>set loading...</SuperButton>
				</div>
			)}
		</div>
	)
}

export default HW10
