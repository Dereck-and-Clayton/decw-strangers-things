// import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

// const cohortName = '2304-FTB-ET-WEB-FT';
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

function SinglePost( props ) {
    // const navigate = useNavigate();
    // console.log('props: ' + props);
    const navigate = useNavigate();

    // const { id } = useParams();

    // const posts = props.posts;

    // const specificPost = posts.filter((singlePost) => {
    //     if(singlePost.author == String(id)) {
    //         return singlePost;
    //     }
    // })

    // console.log(specificPost);

    return (
        <div className="post-card">
            <h2>Title: {props.title}</h2>
            <h2>ID: {props.id}</h2>
            {/* <h2>Author: {props.author.username}</h2> */}
            <h2>{props.description}</h2>
        </div>
    )
}

export default SinglePost;