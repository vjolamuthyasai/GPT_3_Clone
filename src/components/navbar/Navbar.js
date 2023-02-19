import React from 'react';
import classes from './Navbar.module.css';
import './Navbar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

const Menu = () => {
  return (
    <React.Fragment>
      <p>
        <a href="#Home"></a> Home
      </p>
      <p>
        <a href="#wgpt3"></a> What is gpt3
      </p>
      <p>
        <a href="#possibility"></a> Open AI
      </p>
      <p>
        <a href="#feature"></a> Case Studies
      </p>
      <p>
        <a href="#blog"></a> Library
      </p>
    </React.Fragment>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={classes.gpt3__navbar}>
      <div className={classes.gpt3__navbar_links}>
        <div className={classes.gpt3__navbar_links_logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={classes.gpt3__navbar_links_container}>
          <Menu />
        </div>
        <div className={classes.gpt3__navbar_sign}>
          <p> Sign In</p>
          <button type="button"> Sign Up</button>
        </div>
        <div className="gpt3__navbar_menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}

          {toggleMenu && (
            <div className="gpt3__navbar_menu_container scale_up_center">
              <div className={classes.gpt3__navbar_menu_container_links}>
                <Menu />
                <div className={classes.gpt3__navbar_menu_container_links_sign}>
                  <p> Sign In</p>
                  <button type="button"> Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
