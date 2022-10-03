import axios from 'axios';

export const getEstudante = () => {
  const request = axios.get('http://localhost:3001/').then((response)=> response.data)
  return request
}

export const postEstudante = (obj) => {
  const post  = axios.post('http://localhost:3001/', obj)
  return post
}

export const deleteEstudante = async (id) => {
  return await axios.delete(`http://localhost:3001/${id}`)
}