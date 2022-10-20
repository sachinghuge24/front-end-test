import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/gallery'>Gallery</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </ul>
  );
}

export default Home;
