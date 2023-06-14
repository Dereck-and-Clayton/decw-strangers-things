import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn)
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Link to="/">Home </Link>
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
          <Link to="/">Home </Link>
          {/* <Link to="/LogIn">Login </Link> */}
          <Link to="/LogIn"> LogIn / Register </Link>
          
        </>
      )}
    </div>
  );
};

export default NavBar;