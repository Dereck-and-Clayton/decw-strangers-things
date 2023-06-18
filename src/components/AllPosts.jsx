import React, { useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost';

function AllPosts(props) {
    // const posts = props.posts;
    const [allPosts, setAllPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WB-FT/posts");
                const translatedData = await response.json();
                props.setAllPosts(translatedData.data.posts)
                
            } catch (error) {
                console.log(error);
            }
        }  fetchAllPosts();
    }, [])

    let filteredPosts = allPosts.filter((singlePost) => {
        let lowercaseTitle = singlePost.title.toLowerCase();
        let lowercaseQuery = searchQuery.toLowerCase();
        if(lowercaseTitle.includes(lowercaseQuery)) {
            console.log(singlePost)
            return singlePost;
        }
        // return lowercaseTitle.includes(lowercaseQuery);
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
                        // console.log(event.target.value);
                        setSearchQuery(event.target.value);
                    }}

                ></input>
            </form>
            <h2>All Posts</h2>
            
            {
                filteredPosts.length ? filteredPosts.map((singlePost, index) => {
                    return ( 
                        <div>
                            <SinglePost key={index} singlePost={singlePost} />
                        </div>
                    )
                }) : <p>failed to load</p>
                // props.allPosts.length ? filteredPosts.map((singlePost) => {
                //     return (
                //         <div key={singlePost._id}>
                //             <Link to={`/posts/${singlePost._id}`}>
                //                 {/* <SinglePost /> */}
                //             </Link>
                //         </div>
                //     )
                // }) : <p>loading</p>
            }

                 {/* props.allPosts.length ? props.allPosts.map((singlePost) => {
                    return (
                        <div key={singlePost._id}>
                            <p>Title: {singlePost.title}</p>
                            <p>Author: {singlePost.author.username}</p>
                            <p>Description: {singlePost.description}</p>

                            <br /><br />
                        </div>
                    )
                }) : <p>loading</p> */}
            
        </div>
    )
}

export default AllPosts;