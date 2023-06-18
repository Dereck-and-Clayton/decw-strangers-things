// import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// const cohortName = '2304-FTB-ET-WEB-FT';
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

function SinglePost(props) {
    const navigate = useNavigate();
    // console.log('props: ' + props);
    const { id } = useParams();

    return (
        <div className="post-card">
            <h2>Title: {props.title}</h2>
        </div>
    )
}

export default SinglePost;