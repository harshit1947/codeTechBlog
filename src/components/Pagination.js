import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {page, totalPage , pageChangeHandler} = useContext(AppContext);
  return (
    <div className='page-container'>
        <div>
        {
          page !==1 &&
          <button onClick={()=>{
            pageChangeHandler(page-1);
          }}>
          Previous
        </button>
        }
       
       {
        page !==totalPage &&
        <button onClick={()=>{
          pageChangeHandler(page+1);
        }}>
        Next
       </button>
       }
        </div>
       <div>
        <p>Page <span>{page}</span> of <span>{totalPage}</span> </p>
       </div>
    </div>
  )
}

export default Pagination
