import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify({ name, email }));
    alert('Profile saved!');
  };

  return (
    <ProfileContainer>
      <Nav />
      <h1>Profile Settings</h1>
      <Form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={saveProfile}>Save</button>
      </Form>
      <Footer />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  padding: 70px 20px 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  input {
    padding: 10px;
    border: 1px solid #333;
    background-color: #111;
    color: #fff;
    border-radius: 4px;
  }
  button {
    background-color: #e50914;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f40612;
    }
  }
`;

export default Profile;