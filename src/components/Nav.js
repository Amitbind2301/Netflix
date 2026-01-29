/*import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${query}`);
  };

  return (
    <NavContainer>
      <Logo>Netflix Clone</Logo>
      <NavMenu>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/profile">Profile</Link>
      </NavMenu>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">🔍</SearchButton>
      </SearchForm>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #e50914;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 200px;
`;

const SearchButton = styled.button`
  padding: 8px 12px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export default Nav;  */


import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${query}`);
  };
  const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
const handleLogout = () => {
  localStorage.removeItem("currentUser");
  window.location.reload();
};


  return (
    <NavContainer>
      <Logo as={Link} to="/">Netflix Clone</Logo>
      <NavMenu>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/profile">Profile</Link>
      </NavMenu>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">🔍</SearchButton>
      </SearchForm>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #e50914;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 200px;
`;

const SearchButton = styled.button`
  padding: 8px 12px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export default Nav;