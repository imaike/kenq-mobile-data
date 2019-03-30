import React from 'react';
import styled from 'styled-components';
// import { useStore } from 'easy-peasy';
import state from '../state';

/* eslint react/prop-types: 0 */

const NumberCardsSortedMessage = props => {
  // const numSortedStatements = useStore(state => state.numSortedStatements);
  const numSortedStatements = state.getState('numSortedStatements');

  // const isSortingCards = useStore(state => state.isSortingCards);
  const isSortingCards = state.getState('isSortingCards');

  if (isSortingCards) {
    return (
      <CardsSortedDiv>
        <p>
          {numSortedStatements} of
          {' ' + props.totalStatements} cards sorted
        </p>
      </CardsSortedDiv>
    );
  }
  return null;
};

export default NumberCardsSortedMessage;

const CardsSortedDiv = styled.div``;
