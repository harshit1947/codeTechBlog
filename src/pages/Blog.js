// import React, { useContext, useEffect, useState } from 'react'
// import {useLocation, useNavigate} from 'react-router-dom';
// import {AppContext} from '../context/AppContext'
// import Header from '../components/Header';
// import Card from '../components/Card';


// function Blog() {
//     const [blog,setBlog] = useState(null);
//     const [relatedBlog , setRelatedBlog] = useState([]);
//     const location = useLocation();
//     const navigate  = useNavigate();
//     const { setLoading} = useContext(AppContext);
    
//     const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
//     const blogId = location.pathname.split('/').at(-1);
//     console.log(newBaseUrl);
//     console.log(blogId);

   

//     async function fetchRelatedBlogs(){
//         setLoading(true);
//         let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
//         console.log(url);
//         try{
//             const res = await fetch(url);
//             const data = await res.json();
//             console.log(data);
//             setBlog(data.blog);
//             setRelatedBlog(data.relatedBlogs);
//         }catch(err){
//             console.log('error while fetching blog id page');
//             setBlog(null);
//             setRelatedBlog([]);
//         }
//         setLoading(false);
//     }

//     useEffect(()=>{
//         // const page = searchParams.get('page') ?? 1;
        
//           // iska mtlb tag wala page show karna hain
//           if(blogId){
//             fetchRelatedBlogs();
//           }
        
        
//       },[blogId,fetchRelatedBlogs,location.pathname])
//     // fetchRelatedBlogs();

    
//   return (
//     <div>
//       <Header/>
//       <div>
//         <button onClick={()=> navigate(-1)} >
//             Back
//         </button>
//       </div>
//       <div>
//         loading ? 
//         (<p>Loading</p>):
//         (blog ?
//         (
//             <div>
//             <Card post ={blog}/>
//             <h2>Related Blogs</h2>
//             {
//                 relatedBlog.map((post)=>{
//                     return <Card post={post} />
//                 })
//             }
//         </div>)
//         ):
//         (
//             <p>No Post Found</p>
//         )
//       </div>
//     </div>
//   )
// }

// export default Blog


import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Card from '../components/Card';

function Blog() {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const blogId = location.pathname.split('/').at(-1);
  console.log(newBaseUrl);
  console.log(blogId);

  const fetchRelatedBlogs = useCallback(async () => {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (err) {
      console.log('error while fetching blog id page');
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }, [blogId, setLoading]);

  useEffect(() => {
    // iska mtlb tag wala page show karna hain
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId, fetchRelatedBlogs]);

  return (
    <div>
      <Header />
      <div className='back-upp'>
        <button onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className='page-container'>
        {loading ? (
          <p>Loading</p>
        ) : blog ? (
          <div>
            <Card post={blog} />
            <h2 className='related-blog-sec'>Related Blogs</h2>
            {relatedBlog.map((post) => {
              return <Card post={post} key={post.id} />;
            })}
          </div>
        ) : (
          <p>No Post Found</p>
        )}
      </div>
    </div>
  );
}

export default Blog;

