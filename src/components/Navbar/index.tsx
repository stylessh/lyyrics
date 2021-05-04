import { Link } from "wouter";

import { StyledNavbar } from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h2 className="logo">
        <Link to="/">Lyyrics</Link>
      </h2>
    </StyledNavbar>
  );
};

export default Navbar;
