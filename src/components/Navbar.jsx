import {NavLink} from "react-router-dom"
import { useState } from "react";

function Navbar() {
  const [ darkTheme, setDarkTheme ] = useState(false)

  const darkStyles = {
    backgroundColor: "black",
    color: "lightGrey"
  }

  const lightStyles = {
    backgroundColor: "white",
    color: "black"
  }

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme)
  }


  return (
    <div style={darkTheme ? darkStyles : lightStyles}>
    <button onClick={handleToggleTheme}>Dark theme</button>
      <NavLink to="/">
      {( {isActive} ) => {
        return <button className={ isActive ? "nav-active" : "nav-inactive"}>Home</button>
      }}
      </NavLink>

      <NavLink to="/beers">
      {( {isActive} ) => {
        return <button className={ isActive ? "nav-active" : "nav-inactive"}>Enjoy our beers</button>
      }}
      </NavLink>

      <NavLink to="/beer-random">
      {( {isActive} ) => {
        return <button className={ isActive ? "nav-active" : "nav-inactive"}>Random beers</button>
      }}
      </NavLink>

      <NavLink to="/beer-new">
      {( {isActive} ) => {
        return <button className={ isActive ? "nav-active" : "nav-inactive"}>Custom beer</button>
      }}
      </NavLink>
    </div>
  );
}

export default Navbar;
