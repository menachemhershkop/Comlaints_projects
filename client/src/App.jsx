import Layout from './component/Layout'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SubmitComplaintPage from './pages/SubmitComplaintPage'
import AdminLoginPage from './pages/AdminLoginPage'
import ProtectedRoute from './component/ProtectedRoute'
import AdminComplaintsPage from './pages/AdminComplaintsPage'
import ErrorPage from './pages/ErrorPage'

function App() {
 

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/submit' element={<SubmitComplaintPage/>}></Route>
        <Route path='/admin/login' element={<AdminLoginPage/>}></Route>
        <Route path='/admin/complaints' element={<ProtectedRoute><AdminComplaintsPage/></ProtectedRoute>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
                
      </Routes>
    </Layout>
    
    
    </>
  )
}

export default App
