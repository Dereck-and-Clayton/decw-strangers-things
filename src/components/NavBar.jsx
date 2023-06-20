import React from "react";
import { Link } from "react-router-dom";
// import LogOut from './Logout';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn)

  return (
    <div>
      {isLoggedIn ? (
        <>
  <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
      <li><Link to="/LogOut">Logout</Link></li>
    </ul>
  </nav>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/LogIn">Login</Link>
      <Link to="/SignUp">SignUp</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
