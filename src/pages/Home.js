import React from 'react'
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import BlogPosts from '../components/BlogPosts';


function Home() {
  return (
    <div>
      <Header/>
      <div>
        <BlogPosts/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
