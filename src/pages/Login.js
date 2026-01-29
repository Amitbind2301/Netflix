import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return alert("Enter your email");

    const user = { email, name: "User" };

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.reload();
  };

  return (
    <Wrapper>
      <LoginBox>
        <h1>Login</h1>
        <input 
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Continue</button>
      </LoginBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LoginBox = styled.div`
  width: 350px;
  padding: 30px;
  background: #111;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    margin: 10px 0;
  }

  button {
    background: #e50914;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
`;

export default Login;
