import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_PATH_ABOUT, ROUTER_PATH_LEARN, ROUTER_PATH_LANDING } from '../routes';

import './NavBar.css';


const NavBar: React.FC = (): ReactElement => {
  return (
    <nav>
      <h1>SQL for Busy People</h1>
      <p>
        <Link to={ROUTER_PATH_LANDING}>
          Home
        </Link>
        <Link to={ROUTER_PATH_ABOUT}>
          About
        </Link>
        <Link to={ROUTER_PATH_LEARN}>
          Learn
        </Link>
      </p>
    </nav>
  );
};

export default NavBar;
