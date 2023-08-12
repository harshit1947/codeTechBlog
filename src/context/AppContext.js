import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

//step1 
export const AppContext = createContext('');


//step 2

export default function AppContextProvider({children})
{
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [totalPage , setTotalPage] = useState(null);
    const [posts , setPosts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    
    async function fetchBlogPosts(page =1, tag = null, category){
         tag = location.pathname.split('/').at(-1).replaceAll('%20','');
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url +=`&tag=${tag}`;
            console.log(url);
        }
        if(category){
            url +=`&category=${category}`;
        }
        setLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(url);
            console.log(data);
            setPage(data.page);
            setTotalPage(data.pageSize);
            setPosts(data.posts);

        }catch(err){
            console.log('Error while fetching blogs from API');
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }
    function pageChangeHandler(page){
        navigate({search:`?page=${page}`})
        setPage(page);
        // fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchBlogPosts,
        pageChangeHandler
    };
    
    return (<AppContext.Provider value={value}>
                {children}
          </AppContext.Provider>)
}