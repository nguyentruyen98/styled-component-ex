import React from "react";
import styled from "styled-components";
import { Link as RouterLink, LinkProps } from "react-router-dom";

interface ILinkProps extends LinkProps {
  isActive?: boolean;
  children?: React.ReactNode;
}

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eeeeee;
`;
const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: "Open Sans";
  background: none;
  left: initial;
  top: inherit;
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
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink isActive to="/login">
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
