import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list-user' element={<ListUser />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/edit-user' element={<EditUser />} />
        <Route path='/delete-user' element={<DeleteUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
