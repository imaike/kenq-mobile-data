import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { view } from 'react-easy-state';
import Admin from './Admin/Admin';
import Statements from './Statements/Statements';
import Presort from './Presort/Presort';
import Sort from './Sort/Sort';
import state from './state';

/* eslint react/prop-types: 0 */

class App extends Component {
  render() {
    const displayAdmin = state.getState('displayAdmin');
    const displayPresort = state.getState('displayPresort');
    const displayStatements = state.getState('displayStatements');
    const displaySort = state.getState('displaySort');

    const {
      adminData,
      columnStatements,
      preSortData,
      sortCharacteristics,
      sortPageData,
    } = this.props;

    return (
      <PageContainer>
        {displayAdmin && <Admin {...adminData} out={displayAdmin} />}
        {displayStatements && (
          <Statements
            out={displayStatements}
            columnStatements={columnStatements}
          />
        )}
        {displayPresort && (
          <Presort
            {...preSortData}
            out={displayPresort}
            columnStatements={columnStatements}
          />
        )}
        {displaySort && (
          <Sort
            {...sortPageData}
            out={displaySort}
            sortCharacteristics={sortCharacteristics}
          />
        )}
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
