import React from 'react';
import styled from 'styled-components';
// import { useStore } from 'easy-peasy';
// import { Link } from 'react-router-dom';
import { view } from 'react-easy-state';
import state from '../state';

// eslint-disable-next-line react/button-has-type
/* eslint react/prop-types: 0 */

const handleClick = () => {
  console.log('clicked');
  state.setState({ displayAdmin: true, displayPresort: false });
};

const SortCompletedMessageBox = props => {
  // const sortCompleted = useStore(state => state.sortCompleted);
  const sortCompleted = state.getState('sortCompleted');

  if (sortCompleted) {
    return (
      <div>
        <p>{props.sortCompleteText}</p>
        <nav>
          <button type="button" onClick={handleClick}>
            Admin
          </button>
          <NavButStatements type="button" onClick={handleClick}>
            Admin
          </NavButStatements>
        </nav>
      </div>
    );
  }
  return null;
};

export default view(SortCompletedMessageBox);

// const CardsSortedDiv = styled.div``;

const NavButStatements = styled.button`
  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;
  appearance: none;
  height: 40px;
  width: 100px;
  font-size: 25px;
  margin-left: 845px;
  margin-top: 20px;
  margin-bottom: 350px;
  color: whitesmoke;
  background: #323232;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 0px solid #666;
  text-align: center;
  line-height: 1em;

  &:active {
    background-color: #146a9d;
  }
`;
