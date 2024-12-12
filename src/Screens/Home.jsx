import { Link } from "react-router-dom";
export default function Home({News}) {
  console.log('News received in Home:', News);
  
  return (
    // newsfeed
    <div className=''>
        
      <div className='flex justify-center mt-[5rem] text-blue-900'>
        <h3 className='text-7xl font-bold'>THE HOURS</h3>
        <span className='text-6xl'>|</span>
        <p className='text-xl mt-[1rem]'>NEWS AND OPINION BLOG</p>
      </div>

      <div>
      
     
      {/* VIDEO */}
      <video height='100%' width='70%' autoPlay muted loop className='m-auto mt-[5rem]'>
        <source src=' https://video.wixstatic.com/video/2feeec_08e464b346d44058b1997753b02fa6d2/720p/mp4/file.mp4' />
      </video>
     
      </div>
      
   
      {/* Display limited number of news items */}
      <div className="newsfeed border-2 mt-[10rem] flex flex-wrap justify-evenly p-4">
        {News?.slice(0, 4).map((article, index) => (
          <div key={index} className="mb-10 w-full sm:w-80 md:w-96 lg:w-72 xl:w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-bold text-xl mb-4">{article.title}</h3>
            <img
              className="h-48 w-full object-cover mb-4 rounded-md"
              src={article.urlToImage}
              alt={article.title}
            />
            <p className="text-sm text-gray-700 mb-4">{article.description}</p>
            {/* <a href={article.url} target="_blank" className="text-blue-500 hover:underline">
              Read More
            </a> */}
              <Link to={`/article/${index}`} className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-300 ease-in-out"> Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
