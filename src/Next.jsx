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
                <h1 className='h1'>ea molestias quasi exercitationme repellate qui ipsa aut</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi consequuntur illum necessitatibus ipsum aliquam cum aliquid eaque sapiente at deleniti modi debitis, corporis alias labore. </p>
                <p className='main_text'>Comments</p>
                {posts.map((post) => (
                    <li className='li_comments' key={post.id}>
                        <h2>{post.name}</h2>
                        <h2>{post.phone}</h2>
                        <h1>{post.email}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewPost;