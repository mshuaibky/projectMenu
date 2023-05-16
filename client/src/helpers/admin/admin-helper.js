import axios from 'axios'
axios.defaults.withCredentials = true

//Admin signUp
export async function AdminsignUpDetails(credentials){
    console.log(credentials,'naayaa');
    return new Promise((resolve,reject)=>{
      axios.post('http://localhost:8000/admin/sign-up',credentials).then((data)=>{
          resolve(data)
      }).catch((error)=>{
          reject(error)
      })
    })
  }
//adminLogin
export async function AdminLoginDetails(credentials){
    return new Promise((resolve,reject)=>{
      axios.post('http://localhost:8000/admin/login',credentials).then((data)=>{
          resolve(data)
      }).catch((error)=>{
          reject(error)
      })
    })
  }

  //adding catagory
  export async function cataDetails(details){
    return new Promise((resolve,reject)=>{
      axios.post('http://localhost:8000/admin/add-catagory',details).then((data)=>{
        resolve(data)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
  //getting all catagories

  export async function getAllCatagories(){
    return new Promise((resolve,reject)=>{
      axios.get('http://localhost:8000/admin/get-catagory').then((data)=>{
        resolve(data)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
  
  export async function getUsers(){
    return new Promise((resolve,reject)=>{
      axios.get('http://localhost:8000/admin/get-users').then((data)=>{
        resolve(data)
      }).catch((error)=>{
        reject(error)
      })
    })
}

export async function makeAdmin(id){
  return new Promise((resolve,reject)=>{
    axios.get(`http://localhost:8000/admin/make-admin${id}`).then((data)=>{
      resolve(data)
    }).catch((error)=>{
      reject(error)
    })
  })
}