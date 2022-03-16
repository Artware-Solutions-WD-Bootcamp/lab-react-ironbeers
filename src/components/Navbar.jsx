import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        {({ isActive }) => {
          return (
            <Button className={isActive ? "nav-active" : "nav-inactive"}>
              Home
            </Button>
          );
        }}
      </NavLink>
    </div>
  );
}

export default Navbar;
