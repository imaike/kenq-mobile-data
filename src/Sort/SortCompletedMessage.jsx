import React from 'react';
// import styled from "styled-components";
// import { useStore } from 'easy-peasy';
// import { Link } from 'react-router-dom';
import { view } from 'react-easy-state';
import state from '../state';

// eslint-disable-next-line react/button-has-type
/* eslint react/prop-types: 0 */

const SortCompletedMessageBox = props => {
  // const sortCompleted = useStore(state => state.sortCompleted);
  const sortCompleted = state.getState('sortCompleted');

  if (sortCompleted) {
    return (
      <div>
        <p>{props.sortCompleteText}</p>
        <nav>
          <button>next</button>
        </nav>
      </div>
    );
  }
  return null;
};

export default view(SortCompletedMessageBox);

// const CardsSortedDiv = styled.div``;
