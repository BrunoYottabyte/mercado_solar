import React, { useState, useCallback } from 'react'
import { api } from '../services/api'

const useFetch = ({ load }) => {
	const [data, setData] = React.useState(null)
	const [error, setError] = React.useState(null)
	const [loading, setLoading] = React.useState(() => load ? load : null)

	const request = useCallback(async (url, options) => {
		let response
		let data

		try {
			setLoading(true)
			setError(null)
			response = await api(url, options)
			data = await response?.data
			setData(response)

		} catch (erro) {
			setError(erro)
			console.log(erro)

		} finally {
			setLoading(false)
			return { response, data }

		}


	}, [])

	return {
		data, error, loading, request, setLoading
	}
}

export default useFetch

