import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({post}) {
    console.log(post);
  return (
    <div>
      <div>
        <NavLink to={`/blog/${post.id}`}>
          <h2>{post.title}</h2>
        </NavLink>
      </div>
      <div>
        <p>By <span className='author'>{post.author}</span> on <NavLink to={`/categories/${post.category}`}>
        <span>{post.category}</span>
          </NavLink> </p>
      </div>
      <div>
        Posted on <span>{post.date}</span>
      </div>
      <div>
        {post.content}
      </div>
      <div>
        {
            post.tags.map((tag)=>{
                return ( < NavLink  to={`/tags/${tag}`}>
                         <div> #{tag} </div>
                </NavLink>
                    )
            })
        }
      </div>
    </div>
  )
}

export default Card
