import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/list-user'>List User</NavLink>
        </li>
        <li>
          <NavLink to='/create-user'>Create New</NavLink>
        </li>
        <li>
          <NavLink to='/edit-user'>Edit User</NavLink>
        </li>
        <li>
          <NavLink to='/delete-user'>Delete User</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
