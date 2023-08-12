
import './App.css';
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import {Routes,Route, useSearchParams, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Tag from './pages/Tag';
import Category from './pages/Category';


function App() {
  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes('tags')){
      // iska mtlb tag wala page show karna hain
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page),tag);
    }else if(location.pathname.includes('categories')){
      //iska mtlb categories ka page show karna hain
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page),null,category);
    }else{
      fetchBlogPosts(Number(page));
    }
    
  },[location.pathname,location.search])
  return (
    
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog/:blogId' element={<Blog/>} />
          <Route path='/tags/:tag'  element={<Tag/>} />
          <Route path='/categories/:category' element={<Category/>} />
      </Routes>
    </div>
   
  );
}

export default App;
