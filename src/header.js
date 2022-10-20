import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

function Header() {
  return (
    <>
      <Link to='/'>
        <AiFillHome />
      </Link>
    </>
  );
}

export default Header;
