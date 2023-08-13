import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  
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
            <Link  to="/ViewPost">View Post</Link>
        </div>
    </div>
  );
};

export default Dashboard;