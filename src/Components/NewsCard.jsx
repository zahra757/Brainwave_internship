import React from 'react'
import { Link } from 'react-router-dom'
// child component
//accepting props from all news and bringing the cards here , this is the child cmomponent
export default function NewsCard({News}) {
   

  return (
    <div>
        <div className='newsfeed border-2 mt-[10rem] flex flex-wrap justify-evenly p-4'>
    {
      News?.slice(0,20).map((article, index) => (
        <div key={index} className='mb-10 w-full sm:w-80 md:w-96 lg:w-72 xl:w-80 p-4 bg-white shadow-lg rounded-lg'>
          <h3 className='font-bold text-xl mb-4'>{article.title}</h3>
          <img className='h-48 w-full object-cover mb-4 rounded-md' src={article.urlToImage} alt={article.title} />
          <p className='text-sm text-gray-700 mb-4'>{article.description}</p>
          {/* <a href={article.url} target='_blank' className='text-blue-500 hover:underline'>
            Read More
          </a> */}
          <Link to={`/article/${index}`} className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-300 ease-in-out"> Read More</Link>

          
        </div>
        
      ))
    }
   
  </div>
    </div>
  )
}
