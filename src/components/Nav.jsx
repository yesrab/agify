import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/age'>Age</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/CustomHook'>Custom Hook playground</Link>
      <Link to='/Counter'>counter page</Link>
    </nav>
  );
}

export default Nav;
