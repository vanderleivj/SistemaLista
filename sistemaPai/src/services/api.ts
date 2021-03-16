import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://flt-sas-hml.omintseguros.com.br/api/SASData/Get_V2/'
})


export default api;
