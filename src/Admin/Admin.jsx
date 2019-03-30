import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { view } from 'react-easy-state';
// import PropTypes from 'prop-types';
import state from '../state';

/* eslint react/prop-types: 0 */

const handleButtonClick = e => {
  console.log(e.target.id);
  const buttonId = e.target.id;
  if (buttonId === 'StatementsButton') {
    state.setState({ displayAdmin: false, displayStatements: true });
  }
  if (buttonId === 'goButton') {
    state.setState({ displayAdmin: false, displayPresort: true });
  }
};

class Admin extends Component {
  render() {
    console.log('TCL: Admin -> render -> props', this.props);
    const { projectName, email } = this.props;
    return (
      <PageContainer>
        <Column1>
          <Column1Button id="emailButton" onClick={handleButtonClick}>
            Email Results
          </Column1Button>
          <Column1Button id="informationButton" onClick={handleButtonClick}>
            Information
          </Column1Button>
        </Column1>
        <Column2>
          <Column2Button id="deleteButton" onClick={handleButtonClick}>
            Delete Data
          </Column2Button>
          <Column2Button id="StatementsButton" onClick={handleButtonClick}>
            Statements
          </Column2Button>
        </Column2>
        <Column3>
          <label htmlFor="projectNameInput">
            Project Name:
            <input
              id="projectNameInput"
              type="text"
              name="projectName"
              defaultValue={projectName}
            />
          </label>
          <label htmlFor="emailAddressInput">
            Email Address:
            <input
              id="emailAddressInput"
              type="text"
              name="email"
              defaultValue={email}
            />
          </label>
        </Column3>
        <BeginQsortButton id="goButton" onClick={handleButtonClick}>
          Q
        </BeginQsortButton>
        <ResultsSection>
          <ResultsTitle>Results</ResultsTitle>
          <ResultsDiv />
        </ResultsSection>
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
  display: grid;
  justify-items: center;
  grid-template-columns: 341px 342px 342px 341px;
  grid-template-rows: 350px auto;
  width: 1366px;
  height: 1004px;
  background-color: #323232;
  color: white;
  padding-top: 20px;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.2s linear;
  transition: visibility 1s linear;
`;

const Column1 = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  /* border: 2px solid yellow; */
`;

const Column2 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  /* border: 2px solid yellow; */
`;

const Column3 = styled.div`
  width: 250px;
  grid-column-start: 3;
  grid-row-start: 1;
  /* border: 2px solid yellow; */

  input {
    width: 250px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const Column1Button = styled.button`
  position: relative;
  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;
  appearance: none;
  height: 140px;
  width: 250px;
  margin-left: 45px;
  margin-bottom: 15px;
  margin-top: 10px;
  color: #323232;
  background: #1985c5;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 0px solid #666;
  font-size: 300%;
  text-align: center;
  line-height: 1em;

  &:active {
    background-color: #146a9d;
  }
`;

const Column2Button = styled.button`
  position: relative;
  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;
  appearance: none;
  width: 250px;
  height: 140px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 46px;
  color: #323232;
  background: #1985c5;
  border: 0px solid #666;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-size: 300%;
  text-align: center;
  line-height: 1.05em;

  &:active {
    background-color: #146a9d;
  }
`;

const BeginQsortButton = styled.button`
  appearance: none;
  position: relative;
  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;
  margin-left: 5px;
  width: 250px;
  margin-top: 2px;
  height: 250px;
  background: #55b262;
  color: #323232;
  font-weight: 900;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  grid-column-start: 4;
  grid-row-start: 1;
  font-size: 1300%;
  text-align: center;
  user-select: none;
  border: 0px solid black;
  outline: none;

  p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:active {
    background-color: #448e4e;
  }
`;

const ResultsSection = styled.div`
  margin-top: 50px;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  /* border: 2px solid red; */
`;

const ResultsTitle = styled.div`
  font-size: 30px;
`;

const ResultsDiv = styled.div`
  height: 480px;
  width: 1270px;
  background: whitesmoke;
`;
