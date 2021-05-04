import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;

  width: 90%;
  margin: 0 auto;

  padding: 2em 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  .logo a {
    color: ${({ theme }) => theme.color.main};

    font-weight: 700;
  }
`;

export { StyledNavbar };
