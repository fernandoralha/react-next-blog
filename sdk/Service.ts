import axios, { AxiosResponse } from "axios"

const Http = axios.create()

class Service {
  protected static Http = Http
  protected static getData = getData
}

function getData<T> (res: AxiosResponse<T>) {
  const result: any = res.data;
  return result.data;
}

Http.defaults.baseURL = 'https://gateway.marvel.com/v1/public'

export default Service