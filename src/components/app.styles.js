import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Main = styled.main`
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 40px 0 10px;
  width: calc(100% - 24px);
  padding-top: 78px;
  text-align: center;
  background-color: #fff;
`;

const BackLink = styled(Link)`
  position: fixed;
  display: block;
  margin: 8px 8px 0;
  padding: 8px;
  text-align: left;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #aaa;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  opacity: 75%;

  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 2000ms;

  &:hover {
    background-color: #afa;
    opacity: 100%;
  }
`;


export { Container, Main, BackLink };
