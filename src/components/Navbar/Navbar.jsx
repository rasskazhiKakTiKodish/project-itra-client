import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import './Navbar.scss'

const Navbar = () => {
  const {logout, isLogin} = useContext(AuthContext)
    return (
<nav>
    <div className="nav-wrapper navbar brown">
      <a href="/" className="brand-logo">Создай свою коллекцию</a>
      {
        isLogin
        ? <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/" onClick={logout}>Выйти</a></li>
          </ul>
        : <ul id="nav-mobile" className="right hide-on-med-and-down">
           
          </ul>
      }

    </div>
  </nav>
    )
}

export default Navbar