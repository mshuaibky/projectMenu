import React,{useState,useEffect} from 'react'
import {getUser} from '../../helpers/user/user-helper'

function UserProfile() {
    const [user,setUser]=useState([])
    console.log(user,'namma user');
    useEffect(()=>{
        console.log('dldj');
        getUser().then((data)=>{
            console.log(data,'data');
           if(data){
            setUser(data.data.data[3])
           }
        })
    },[])
  return (
    <div className='p-3 mt-6'>
      <a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
{user.name}
      </h3>

     
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
       {user.email}
     </p>
  </div>

  
</a>
    </div>
  )
}

export default UserProfile
