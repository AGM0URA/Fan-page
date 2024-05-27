// NavBar.styles.js

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgb(192, 192, 192);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;

  nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    padding: 15px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
  }

  a:hover {
    color: #000;
  }

  img {
    width: 50px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      padding: 10px;
    }
  }
`;

export { Container };
