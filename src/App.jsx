import './styles/App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'

import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
