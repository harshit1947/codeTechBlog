import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogPosts from '../components/BlogPosts';
import Pagination from '../components/Pagination';
import Header from '../components/Header'

function Category() {
    const location = useLocation();
    const navigate = useNavigate();
    const category = location.pathname.split('/').at(-1);
  return (
    <div>
      <Header/>
      <div className='back-upp'>
        <button  onClick={() => navigate(-1)}
        >
            Back
        </button>
        <h2>
            Blogs on <span className='tag'>{category}</span>
        </h2>
      </div>
      <BlogPosts/>
      <Pagination/>
    </div>
  )
}

export default Category
