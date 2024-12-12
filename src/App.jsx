import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import About from './Screens/About'
import Allnews from './Screens/Allnews'
import Advertise from './Screens/Advertise'
import Contact from './Screens/Contact'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleDetail from './Screens/ArticleDetail'
import Footer from './Components/Footer'
export default function App() {
  const [News, SetNews] = useState([]);

  useEffect(() => {
    const apiKey = '3491be2eb532496f9245de852f1e56ab';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        SetNews(response.data.articles);
      })
      .catch((err) => {
        console.error('Failed to fetch news:', err);
      });
  }, []);
  return (
    <div className=''>
      <Navbar/>
      <Routes>
      {/* <Route path='/Home' element={<Home/>}></Route> */}
      <Route path="/Home" element={<Home News={News} />} />
      <Route path='/About' element={<About/>}></Route>
      {/* <Route path='/Allnews' element={<Allnews/>}></Route> */}
      <Route path="/allnews" element={<Allnews />} />
      <Route path='/Advertise' element={<Advertise/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Article'></Route>
      <Route path='/article/:id' element={<ArticleDetail/>}></Route>
      </Routes>
      
  <Footer/>
      
    </div>
  )
}
