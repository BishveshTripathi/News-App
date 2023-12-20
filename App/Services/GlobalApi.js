import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

  const apiKey = '?country=us&apiKey=1f7b094a99a3406998ff77add398cafe'
  const getTopHeadline = api.get('/top-headlines'+apiKey)
  const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=1f7b094a99a3406998ff77add398cafe")

  export default{
    getTopHeadline,getByCategory
  }