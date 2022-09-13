import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink, LinkProps, useLocation } from "react-router-dom";

interface ILinkProps extends LinkProps {
  isActive?: boolean;
  children?: React.ReactNode;
}

interface IMenuProps {
  open?: boolean;
}

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;
const Menu = styled.nav<IMenuProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: #fff;
  color: #000;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: inherit;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: #000;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Link = ({ isActive, children, ...props }: ILinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

StyledLink.defaultProps = {
  isActive: false,
};

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((state) => !state)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink isActive={pathname === "/"} to="/">
          Home
        </StyledLink>
        <StyledLink isActive={pathname === "/login"} to="/login">
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
