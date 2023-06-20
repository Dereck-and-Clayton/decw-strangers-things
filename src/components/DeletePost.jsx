import React, {useState} from 'react';

function DeletePost(props) {
    const TOKEN_STRING = localStorage.getItem('token');

    const sendDeleteRequest = async (event) => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${event.target.value}`, {
                method: 'DELETE'
            });

        const translatedData = await response.json();

        const filteredPosts = props.allPosts.filter((singlePost) => {
            if(singlePost.id != event.target.value) {
                return singlePost;
            }
        })

        props.setAllPosts(filteredPosts);
    
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Title: {props.post.title}</h2>
            <h2>ID: {props.post.id}</h2>
            <h2>Description: {props.desciption}</h2>
            <button onClick={sendDeleteRequest} value={props.post.id}>
                Delete Post #{props.post.id}
            </button>
        </div>
    )

}

export default DeletePost;