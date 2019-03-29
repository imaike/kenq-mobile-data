import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { view } from 'react-easy-state';
import state from '../state';

const handleClick = () => {
  console.log('clickedStatementsButton');
  state.setState({ displayAdmin: false, displayStatements: true });
};

class Admin extends Component {
  render() {
    return (
      <PageContainer>
        <h1>Mobile Data</h1>
        <NavButStatements onClick={handleClick}>Statements</NavButStatements>
      </PageContainer>
    );
  }
}

export default view(Admin);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  width: 1366px;
  height: 1024px;
  background-color: steelblue;
  color: white;
  padding: 20px;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.2s linear;
  transition: visibility 1s linear;
`;

const NavButStatements = styled.button`
  height: 30px;
  width: 150px;
`;
