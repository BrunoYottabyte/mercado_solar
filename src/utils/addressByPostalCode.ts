import { api } from "../services/api"

const addresParser = (data: any) => {
  const { logradouro, bairro, localidade, uf } = data
  return `${logradouro ? `${logradouro},`:''} ${bairro? `${bairro},` :''} ${localidade? `${localidade},`: ''} - ${uf}`
}

export const addressByPostalCode = async (postalCode: string) => {
  const response = await api.get(`https://viacep.com.br/ws/${postalCode}/json/`)
  const data = await response.data
  
  return addresParser(data)
}
