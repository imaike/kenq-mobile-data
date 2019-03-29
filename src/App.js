import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { view } from 'react-easy-state';
import Admin from './Admin/Admin';
import Statements from './Statements/Statements';
import state from './state';

class App extends Component {
  render() {
    const displayAdmin = state.getState('displayAdmin');
    const displayStatements = state.getState('displayStatements');
    return (
      <PageContainer>
        {displayAdmin && <Admin out={displayAdmin} />}
        {displayStatements && <Statements out={displayStatements} />}
      </PageContainer>
    );
  }
}

export default view(App);

const PageContainer = styled.div`
  background-color: black;
  /* width: 1366px;
  height: 1024px;
  
  padding: 20px; */
`;
