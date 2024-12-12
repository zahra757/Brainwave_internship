// parent component
import React from 'react'
import NewsCard from '../Components/NewsCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Allnews() {
    const [News, SetNews]= useState([])
    const [Loading , SetLoading]= useState(true)
    const [Error, SetError]=useState('')
   
  

    useEffect(()=>{
const apiKey='3491be2eb532496f9245de852f1e56ab'
const url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
axios.get(url).then((response)=>{SetNews(response.data.articles) 
  
    SetLoading(false)
})
.catch((err)=>{
    SetError('Failed to fetch news')
    SetLoading(false)
})
    },[])
    if (Loading) return <div>...Loading</div>
    if (Error) return <div>{Error}</div> 
  return (
    <div>
        {/* creating props to so it can be used anywhere */}
        {/* this is the parent component */}
        <NewsCard News={News}/>
         {/* Pass the full news list to the Home component */}   
         
    </div>
  )
}
