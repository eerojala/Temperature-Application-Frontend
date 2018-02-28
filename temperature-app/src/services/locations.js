import axios from 'axios'
const baseUrl = '/api/locations'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getSingle = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  console.log(response.data)

  return response.data
}

export default { getAll, getSingle }