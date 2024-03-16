import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/Home'
import AuthCallback from './pages/AuthCallback'

const App = () => {
  return (
   <Routes>
       <Route path='/' element={<Layout><Home /></Layout>} />
       <Route path='/auth-callback' element={<AuthCallback />} />
       <Route path='/user-profile' element={<span>User Profile Page</span>} />
       <Route path='*' element={<Navigate to="/" />} />
   </Routes>
  )
}

export default App