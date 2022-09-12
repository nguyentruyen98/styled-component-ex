import styled, { css } from "styled-components";

interface IButtonProps {
  btnType?: "secondary" | "primary";
  size?: "large" | "small";
}

const Button = styled.button<IButtonProps>`
  color: white;
  background: ${(props) => (props.btnType === "secondary" ? "red" : "blue")};
  font-weight: bold;
  ${(props) =>
    props.size === "large"
      ? css`
          padding: 12px;
          font-size: 1.5em;
          border-radius: 6px;
        `
      : css`
          padding: 8px;
          font-size: 1em;
          border-radius: 4px;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.defaultProps = {
  btnType: "primary",
  size: "small",
};

export { Button };
