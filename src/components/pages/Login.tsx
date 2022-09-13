import React, { useState } from "react";
import styled from "styled-components";
import { Input, PasswordInput } from "components/common";
const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [form, setForm] = useState({ userName: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <h1>Login</h1>
      <Form>
        <Input
          onChange={handleChange}
          value={form.userName}
          name="userName"
          placeholder="Username"
        />
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name="password"
        />
      </Form>
    </>
  );
};

export default Login;
