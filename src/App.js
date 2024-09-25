import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import ModifyForm from './pages/user/ModifyForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user/loginform' element={<LoginForm />} />
          <Route path='/user/joinform' element={<JoinForm />} />
          <Route path='/user/modifyform' element={<ModifyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
