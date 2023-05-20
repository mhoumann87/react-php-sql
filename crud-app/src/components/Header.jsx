import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className='container flex'>
        <Link to='/'>
          <h1>React/PHP Crud App</h1>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
