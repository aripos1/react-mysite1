import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddList from './pages/guestbook/AddList';
import DeleteForm from './pages/guestbook/DeleteForm';
import Main from './pages/main/Main';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import ModifyForm from './pages/user/ModifyForm';
import GalleryList from './pages/gallery/List';
import BoardList from './pages/board/List';
import Read from './pages/board/Read';
import BoardModifyForm from './pages/board/ModifyForm';
import WriteForm from './pages/board/WriteForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user/loginform' element={<LoginForm />} />
          <Route path='/user/joinform' element={<JoinForm />} />
          <Route path='/user/modifyform' element={<ModifyForm />} />
          <Route path='/guestbook/addlist' element={<AddList />} />
          <Route path='/guestbook/deleform' element={<DeleteForm />} />
          <Route path='/gallery/list' element={<GalleryList />} />
          <Route path='/board/list' element={<BoardList />} />
          <Route path='/board/read' element={<Read />} />
          <Route path='/board/modifyform' element={<BoardModifyForm />} />
          <Route path='/board/writeform' element={<WriteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
