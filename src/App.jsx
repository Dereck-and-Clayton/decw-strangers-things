import { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom"
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import LogIn from "./components/LogIn";
import SignUp from './components/SignUp';
import './App.css'



function App() {
  const [allPosts, setAllPosts] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token) {
      setIsLoggedIn(true);
    }
  
    // async function fetchAllPosts() {
    //   try {
    //     //not sure if we need /posts at the end
    //     const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WB-FT/posts");
    //     const translatedData = await response.json();
    //     setAllPosts(translatedData.posts);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchAllPosts();
  }, []); //on mount



  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <SearchBar />
      <Routes>
        <Route path ='/' element={<AllPosts allPosts={allPosts} setAllPosts={setAllPosts} />} />
        <Route path ='/posts/:id' element={<SinglePost allPosts={allPosts} setAllPosts={setAllPosts} />} />
        <Route path ='/searchbar' element={<SearchBar allPosts={allPosts} />} />
      </Routes>

    </>
  )
}

export default App;
