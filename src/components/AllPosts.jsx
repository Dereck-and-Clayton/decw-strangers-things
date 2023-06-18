import React, { useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost';

function AllPosts(props) {
    // const posts = props.posts;
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

    return (
        <div>
            <h2>All Posts</h2>
            
            {
                props.allPosts.length ? props.allPosts.map((singlePost) => {
                    return (
                        <div key={singlePost.id}>
                            <p>Title: {singlePost.title}</p>
                            <p>Author: {singlePost.author.username}</p>
                            <p>Description: {singlePost.description}</p>
                            <p>Messages: {singlePost.messages}</p>
                        </div>
                    )
                }) : <p>loading</p>
            }

            {/* <div>
                {props.allPosts.length ? props.allPosts.map((post) => {
                    return <SinglePost key={post.id}  />
                }) : ( <h4>Loading</h4>)
            }
            </div> */}
            
        </div>
    );
}

export default AllPosts;