import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const PageContent = styled.main`
  max-width: 800px;
  margin: 0 auto 0 auto;
  padding: 0 16px;
  padding-top: 80px;
  box-sizing: border-box;
  font-family: "Open Sans";
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script";
  }
`;
const Layout = () => {
  return (
    <>
      <Header />
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
};
export default Layout;
