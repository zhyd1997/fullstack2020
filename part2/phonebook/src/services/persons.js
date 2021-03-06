import axios from "axios";
const baseUrl = '/api/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => {
		return response.data
	})
}

const create = newPerson => {
	const request = axios.post(baseUrl, newPerson)
	return request.then(response => {
		return response.data
	})
}

const remove = (id, removePerson) => {
	const request = axios.delete(`${baseUrl}/${id}`, removePerson)
	return request.then(response => {
		return response.data
	})
}

export default { getAll, create, remove }