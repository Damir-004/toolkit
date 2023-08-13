import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPosts } from './postsSlice';

const ViewPost = () => {
const dispatchs = useDispatch();
const posts = useSelector((state) => state.posts.posts);
const error = useSelector((state) => state.posts.error);
const loadings = useSelector((state) => state.posts.loading);

useEffect(() => {
    dispatchs(fetchPosts());
}, [dispatchs]);

if (loadings) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error}</div>;
}

    return (
        <div>
            <div className='top_block'>
                <ul className='ul'>
                    <li className="li">
                        <Link to="/" className="main__link" >Dashboard</Link>
                    </li>
                    <li className="li">
                        <Link to="/ViewPost" className="main__link" >Posts</Link>
                    </li>
                </ul>
            </div>
            
            <ul className='main container'>
                <p className='main_text'>Posts</p>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h1>{post.name}</h1>
                        <h3>{post.phone}</h3>
                        <Link  to="/Next">View Post</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewPost;