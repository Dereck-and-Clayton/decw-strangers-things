import React, { useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost';
import { getAllPosts } from '../api-adapters';
import SearchBar from './SearchBar';

function AllPosts(props) {
    // const posts = props.posts;
    // const [allPosts, setAllPosts] = useState([]);
    // const [searchQuery, setSearchQuery] = useState("");

    // useEffect(() => {
    //     async function getPosts() {
    //         try {
    //             const results = await getAllPosts();
    //             setAllPosts(results);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }  
    //     getPosts();
    // }, [])

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts");
                const translatedData = await response.json();
                props.setAllPosts(translatedData.data.posts);
            } catch(error) {
                console.log(error);
            }
        }
        getAllPosts();
    }, []);

    console.log(props.allPosts);

    // let filteredPosts = allPosts.filter((singlePost) => {
    //     let lowercaseTitle = singlePost.title.toLowerCase();
    //     let lowercaseQuery = searchQuery.toLowerCase();
    //     if(lowercaseTitle.includes(lowercaseQuery)) {
    //         console.log(singlePost)
    //         return singlePost;
    //     }
    //     // return lowercaseTitle.includes(lowercaseQuery);
    // })

    return (
        <div>       
            <h2>All Posts</h2>
            {
                 props.allPosts.length ? props.allPosts.map((singlePost) => {
                    return (
                        <SinglePost 
                            key={singlePost._id} 
                            id={singlePost._id}
                            title={singlePost.title}
                            author={singlePost.author}
                            description={singlePost.description}
                        />

                        // <div key={singlePost._id}>
                        //     <p>Title: {singlePost.title}</p>
                        //     <p>Author: {singlePost.author.username}</p>
                        //     <p>Description: {singlePost.description}</p>

                        //     <br /><br />
                        // </div>
                    )
                }) : <p>loading</p>
           } 
        </div>
    )
}

export default AllPosts;