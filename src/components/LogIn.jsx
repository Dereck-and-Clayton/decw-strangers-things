import React, {useState, useEffect} from "react";
function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
     
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);
  
    return (
      <div>
        <h1>Login</h1>
        {/* <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes> */}
      </div>
    );
  }

  export default LogIn