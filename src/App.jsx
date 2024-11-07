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
import AddTeamFormPage from './pages/AddTeamFormPage';
import TeamDetailPage from './pages/TeamDetailPage';
import CreatePlayerFormPage from './pages/CreatePlayerFormPage';
import GenerateRequestFormPage from './pages/GenerateRequestFormPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/adminPage' element={<AdminPage/>}/>
          <Route path='/teams' element={<TeamsAdminPage/>}/>
          <Route path='/teams/create' element={<AddTeamFormPage/>}/>
          <Route path='/teams/:id' element={<TeamDetailPage/>}/>
          <Route path='/team/:id/createPlayer' element={<CreatePlayerFormPage/>}/>
          <Route path='/generateRequest/team/:teamId/player/:playerId' element={<GenerateRequestFormPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
