import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost(props) {
    //gotta figure out where to put this
    const navigate = useNavigate();


    const createPostRequest = async (title, description, price) => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');

        
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/${cohortName}', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN_STRING_HERE}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                    }
                })
            });

            const translatedData = await response.json();
            console.log(translatedData);
            return translatedData;

        } catch (err) {
            console.log(error);
        }
    }

    const handleSubmit = async(event) {

    }

    return (
        <form onSubmit={createPostRequest}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
            />
        </form>
    )
}

export default CreatePost;