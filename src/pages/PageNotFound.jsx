import pageNotFounde from '../assert/images/404image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useEffect } from 'react';

export  function PageNotFound() {
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found / MovieListSite'
  })

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-4xl text-gray-900 font-bould my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
          <img className='rounded' src={pageNotFounde} alt='404 page image' />
          </div>
        </div>
        <div className='flex my-4 justify-center'>
          <Link to='/'>
          <Button>Back to Home</Button>
          </Link>
          {/* <button onClick={() => navigate('/')} className='p-2 bg-blue-900 rounded text-xl text-white dark:text-white'>Back to Home</button> */}
        </div>
      </section>
    </main>
  )
}
