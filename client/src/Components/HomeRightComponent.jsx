import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { CircularProgress } from '@mui/material';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../hooks/useAuthContext';
const HomeRightComponent = () => {
    const { blogs, dispatch } = useBlogsContext();
    const { user } = useAuthContext();

    const [isLoading, setIsLoading] = useState(true);
    let data;
    useEffect(() => {
        const fetchSuggestiveBlogs = async () => {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            if (response.ok) {
                // console.log(data);
                setIsLoading(false);
            } else {
              console.error('Failed to fetch blogs:', data);
            }
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };
      
        fetchSuggestiveBlogs();

      }, [data]);


    return (
        <>
            <div className='feed__content__container'>
                <h1 style={{ textAlign: 'center', fontFamily: 'Poppins' }}>Blogs</h1>
                {isLoading ?
                    <div style={{ width: '63vw', display: 'flex', justifyContent: 'center' }}><CircularProgress /></div> :
                    <div className='feed__blog__container'>
                        {data && data.map(dat => {
                        return (
                            <>
                                <div className='posted__blogs'>
                                <div className='blog_title__container'>
                                  <h2 className='blog__post__title'>
                                    {dat.name.official.length > 100 ? dat.name.official.slice(0, 100) + '...' : dat.name.official}
                                  </h2>
                                </div>
                          
                                <div className='blog__post__description'>
                                  {`Capital: ${dat.capital[0]}, Region: ${dat.region}`}
                                </div>
                              </div>
                            </>
                        )})}
                    </div>}
            </div>
        </>
    )
}

export default HomeRightComponent;