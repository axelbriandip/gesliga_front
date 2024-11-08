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
import EditTeamPage from './pages/EditTeamPage';
import UsersAdminPage from './pages/users/UsersAdminPage';
import CreateUserFormPage from './pages/users/CreateUserFormPage';
import EditUserFormPage from './pages/users/EditUserFormPage';
import DeleteUserPage from './pages/users/DeleteUserPage';
import UserDetailPage from './pages/users/UserDetailPage';
import RequestsAdminPage from './pages/requests/RequestsAdminPage';
import RequestDetailPage from './pages/requests/RequestDetailPage';
import EditRequestFormPage from './pages/requests/EditRequestFormPage';

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
          <Route path='/team/:teamId/edit' element={<EditTeamPage/>}/>
          <Route path='/users' element={<UsersAdminPage/>}/>
          <Route path='/users/create' element={<CreateUserFormPage/>}/>
          <Route path='/users/:userId/edit' element={<EditUserFormPage/>}/>
          <Route path='/users/:userId/delete' element={<DeleteUserPage/>}/>
          <Route path='/users/:userId/detail' element={<UserDetailPage/>}/>
          <Route path='/requests' element={<RequestsAdminPage/>}/>
          <Route path='/requests/:requestId/detail' element={<RequestDetailPage/>}/>
          <Route path='/requests/:requestId/edit' element={<EditRequestFormPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
