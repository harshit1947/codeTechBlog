import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogPosts from '../components/BlogPosts';
import Pagination from '../components/Pagination';
import Header from '../components/Header';


function Tag() {
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll('%20',' ');
    const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className='back-upp'>
        <button onClick={() => navigate(-1)} >
            Back
        </button>
        <h2>
            Blogs Tagged <span className='tag'>#{tag}</span>
        </h2>
      </div>
      <BlogPosts/>
      <Pagination/>
    </div>
  )
}

export default Tag
