import '../../estilos/componentes/layout/Header.css';

import React from "react";
const Header = (props) => {
  return (
    <header>
      <div className="holder logo">
        <img
          className="img_logo"
          src="logo.png"
          width="400"
          alt="Cargo Expres"
        />
        <h2>LLAMANOS AL 0810-555-2270 </h2>
      </div>
      <div className='navIconos'>
      <ul className="navIcons">
          <li>
            <a href="https://www.instagram.com/" target="_blanck">
              <i class="fa-brands fa-instagram fa-xl "></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blanck">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blanck">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header; 




