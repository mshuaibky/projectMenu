import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {getAllCatagories} from '../../helpers/admin/admin-helper'
function Catagory() {
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
        <div className='m-4'>
            <Link to={'/admin/cata-form'}
            className="mx-5 inline-block rounded bg-teal-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"> Add Menu</Link>
        </div>

        {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
        
        </div>
        <div className='px-6 py-2 space-x-2'>

      
        </div>
      </div>)
  
  })
 }  
  </div> */}
   
   <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
   Catagory
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         first Dish
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          second Dish
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Third Dish
        </th>
      </tr>
    </thead>

{
  cata.map((item)=>{

 return(
    <tbody className="text-center divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {item.catagory}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.foodOne}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.foodTwo}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.foodThree}</td>
      
      </tr>

    
    </tbody>)
     })
    }
  </table>
</div>

    </div>
  )
}

export default Catagory
