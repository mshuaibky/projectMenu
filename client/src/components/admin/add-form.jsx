import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import toast, {Toaster} from 'react-hot-toast'
import {cataDetails} from '../../helpers/admin/admin-helper'

function CataForm() {
  const navigate=useNavigate()
  const [image,setImage]=useState('')
  const validate=values=>{
    const error={}
     
    return error
  }
  const handleImage=(e)=>{
    const file=e.target.files[0]
   
    TransformFile(file)
  };
  const TransformFile=(file)=>{
    
    const reader=new FileReader()
    if(file){
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        setImage(reader.result)
      }
    }else{
      setImage("")
    }
  }
  const formik=useFormik({
    initialValues:{
      catagory:'',
      foodOne:'',
      foodTwo:'',
      foodThree:''
    },
    validate,
   
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      console.log(values,'all values');
     let img={image:image}
   
    
   
     const imgCopy=Object.assign({},values,img)
     console.log(imgCopy,'ellam');
   
      let details=cataDetails(imgCopy)
      toast.promise(details,{
        loading:'loading...',
        success:<b>successfully added</b>,
        error:<b>failed to add Restaurant</b>
      })
      details.then((data)=>{
        if(data){
          toast.success(data.data.msg)
          navigate('/admin/main-page')
        }
      })
    }
  })
  return (
    <div >
      <div className=' mt-6 mx-20'>
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <Link to={'/admin/main-page'}
               href="#" className="block transition hover:text-gray-700">
                <span className="sr-only"> Home </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <Link to={'/admin/main-page'} href="#" className="block transition hover:text-gray-700"> Menu </Link>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a href="#" className="block transition hover:text-gray-700">Add menu </a>
            </li>
          </ol>
        </nav>
      </div>
      <section className=" ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">


            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12 ">
              <form onSubmit={formik.handleSubmit} className="space-y-4 ">
                <div>
                  <label className="sr-only" htmlFor="name">Catagory</label>
                  <input
                    name='catagory'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.catagory}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="catagory"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">Catagory</label>
                  <input
                    name='foodOne'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodOne}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="dish One"
                    type="text"
                    id="foodOne"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">Catagory</label>
                  <input
                    name='foodTwo'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodTwo}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="dish Two"
                    type="text"
                    id="foodTwo"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">Catagory</label>
                  <input
                    name='foodThree'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodThree}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="dish Three"
                    type="text"
                    id="foodThree"
                  />
                </div>

                <div className='py-5'>
                  <input
                    onChange={handleImage}
                    id="fileTwo" name="resImagesTwo" type="file"
                    className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
               {
                image?
                <img className='py-4' width="200px" height="200px" src={image}></img> :""
               }
               
                </div>




                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CataForm
