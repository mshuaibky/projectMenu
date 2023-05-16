import React,{useEffect,useState} from 'react'

import {getAllCatagories} from '../../helpers/admin/admin-helper'


function ListingDish() {
    const [cata,setCata]=useState([])
  console.log(cata,'namma cata');
   useEffect(()=>{
      getAllCatagories().then((result)=>{
        console.log(result,'namma result');
        if(result){
          setCata(result.data.data)
        }
      })
  },[])
  return (
    <div>
       <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 {cata.map((item)=>{
   console.log(item,'uuuu');
  return( 
   
      <div
        key='id'
        className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
      >


    <img className="h-48 w-full object-cover " src={item.image[0].secure_url} alt="Mountain" /> 
 


        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.catagory}</div>
        
         

        </div>
        <div className="px-6 pt-2 pb-2">
        
        <span
          key='tag'
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        >
   {item.foodOne}
        </span>
      
    </div>
    <div className="px-6 pt-2 pb-2">
        
        <span
          key='tag'
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        >
   {item.foodTwo}
        </span>
      
    </div>
    <div className="px-6 pt-2 pb-2">
        
        <span
          key='tag'
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        >
   {item.foodThree}
        </span>
      
    </div>
        <div className='px-6 py-2 space-x-2'>
      
        </div>
      </div>)
  
  })
 }  
  </div>
    </div>
  )
}

export default ListingDish
