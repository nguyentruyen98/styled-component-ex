import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "components/common";

interface IPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isShow?: boolean;
}

const PasswordInputStyled = styled(Input).attrs<IPasswordInputProps>(
  ({ isShow }) => ({
    type: isShow ? "password" : "text",
    placeholder: "Password",
  })
)<IPasswordInputProps>`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: #000;
`;

const PasswordInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <PasswordInputWrapper>
      <PasswordInputStyled {...props} isShow={showPassword} />
      <ToggleButton onClick={() => setShowPassword((s) => !s)}>
        Show
      </ToggleButton>
    </PasswordInputWrapper>
  );
};

export { PasswordInput };
