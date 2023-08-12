import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

function BlogPosts() {
    const {loading,posts} = useContext(AppContext);
    
  
  return (
    <div className='blog-container'>
      {
        loading ? (<Spinner/>) :
         ( posts.length === 0 ? (<div>No post found</div>):
         (posts.map((post)=>{
            return <Card key={post.id} post ={post}/>
         }))
         )
      }
    </div>
  )
}

export default BlogPosts
