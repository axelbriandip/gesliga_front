import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './styles/App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import AdminPage from './pages/AdminPage'
import TeamsAdminPage from './pages/teamsAdminPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/adminPage' element={<AdminPage/>}/>
          <Route path='/teams' element={<TeamsAdminPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
