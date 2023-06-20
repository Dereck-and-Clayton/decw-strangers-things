import React, { useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost';
import { getAllPosts } from '../api-adapters';
import SearchBar from './SearchBar';

const Homepage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const results = await getAllPosts();
        setAllPosts(results);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  let filteredPosts = allPosts.filter((singlePost) => {
    let lowercaseTitle = singlePost.title.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();
    return lowercaseTitle.includes(lowercaseQuery);
  });

  return (
    <div>
      <h2>All Posts</h2>
      <SearchBar setSearchQuery={setSearchQuery} />
      {filteredPosts.length ? (
        filteredPosts.map((singlePost) => (
          <SinglePost
            key={singlePost._id}
            id={singlePost._id}
            title={singlePost.title}
            author={singlePost.author}
            description={singlePost.description}
          />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Homepage;


// import React from 'react';
// import NavBar from './NavBar';
// import AllPosts from './AllPosts';

// const Home = () => {
//   return (
//     <div>
//       <NavBar />
//       <SearchBar />
//       <AllPosts />
//     </div>
//   );
// };

// export default Home;
