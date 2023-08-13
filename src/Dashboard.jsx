import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPosts } from './postsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);

  const [showPosts, setShowPosts] = useState(false);

  const handleClick = () => {
    dispatch(fetchPosts());
    setShowPosts(false);
  };

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowPosts(true);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
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
        <div className='main container'>
            <h1>Dashboard</h1>
            <p>This is the dashboard</p>
            <button onClick={handleClick} disabled={loading}>
                {loading ? 'Loading...' : 'View Posts'}
            </button>
            {showPosts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h1>{post.name}</h1>
                            <h3>{post.phone}</h3>
                            <Link  to="/Next">View Post</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};

export default Dashboard;