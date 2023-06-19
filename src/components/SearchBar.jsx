import { useState } from 'react';

function SearchBar() {
    let [allPosts, setAllPosts] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");

    let filteredPosts = allPosts.filter((singlePost) => {
        let lowercaseTitle = singlePost.title.toLowerCase();
        let lowercaseQuery = searchQuery.toLowerCase();
        if(lowercaseTitle.includes(lowercaseQuery)) {
            console.log(singlePost)
            return singlePost;
        }
    })

    return (
        <div>
            <form>
                <label htmlFor="search-query">Search: </label>
                <input
                    name="search-query"
                    type="text"
                    placeholder="enter text"
                    value={searchQuery}
                    onChange={(event) => {
                        console.log(event.target.value);
                        setSearchQuery(event.target.value);
                    }}
                ></input>
            </form>

            {
                filteredPosts.length ? filteredPosts.map((singlePost, index) => {
                    return (
                        <div key={index}>
                            {/* <SinglePost key={index} singlePost={singlePost} /> */}
                            {/* {/* <h2>Title: {singlePost.title}</h2> */}
                            {/* <h2>Description: {singlePost.description}</h2> */}
                            <h2>Title: {singlePost.Title}</h2>
                            <h2>Description: {singlePost.description}</h2>
                            <h2>Author: {singlePost.author}</h2>
                        </div>
                    )
                }) :  <p>Loading Posts</p>
            }
        </div>
    )
}

export default SearchBar;