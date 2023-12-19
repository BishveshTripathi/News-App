import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

  const apiKey = '?country=us&apiKey=1f7b094a99a3406998ff77add398cafe'
  const getTopHeadline = api.get('/top-headlines'+apiKey)

  export default{
    getTopHeadline
  }