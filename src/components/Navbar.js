import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/images.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">career</a>
          </li>
          <li>
            <a href="">blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
