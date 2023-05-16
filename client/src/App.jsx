
import {BrowserRouter,Routes,Route,}from 'react-router-dom'
import UserSignUP from './pages/user/user-sign-up'
import UserLogin from './pages/user/user-login'
import LandingPage from './pages/user/landing-page'
import AdminSignUP from './pages/admin/admin-sign-up'
import AdminLogin from './pages/admin/admin-login'
import AdminMainPage from './pages/admin/admin-mainPage'
import CataForm from './components/admin/add-form'
import Profile from './pages/user/profile'
import AdminViewUser from './pages/admin/admin-viewuser'

function App() {
 

  return (
   <div>
 <BrowserRouter>
    <Routes>
      {/* user Route */}
   <Route path='/user/signup' element={<UserSignUP/>} />
   <Route path='/user/login' element={<UserLogin/>} />
   <Route path='/' element={<LandingPage/>} />
   <Route path='/user/user-profile' element={<Profile/>} />
   
   {/* AdminRoute */}
   <Route path='/admin/sign-up' element={<AdminSignUP/>} />
   <Route path='/admin/login' element={<AdminLogin/>} />
   <Route path='/admin/main-page' element={<AdminMainPage/>} />
   <Route path='/admin/cata-form' element={<CataForm/>} />
   <Route path='/admin/all-users' element={<AdminViewUser/>} />
   


    
    </Routes>
    
    </BrowserRouter>
   </div>
  )
}

export default App
