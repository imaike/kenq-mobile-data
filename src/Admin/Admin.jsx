import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { view } from 'react-easy-state';
// import PropTypes from 'prop-types';
import state from '../state';

/* eslint react/prop-types: 0 */

const handleClick = () => {
  console.log('clickedStatementsButton');
  state.setState({ displayAdmin: false, displayStatements: true });
};

class Admin extends Component {
  render() {
    console.log('TCL: Admin -> render -> props', this.props);
    const { adminTitle } = this.props;
    return (
      <PageContainer>
        <h1>{adminTitle}</h1>
        <NavButStatements onClick={handleClick}>Statements</NavButStatements>
      </PageContainer>
    );
  }
}

// Admin.propTypes = {
//   adminTitle: PropTypes.string,
// };

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
  border-radius: 3px;
`;
