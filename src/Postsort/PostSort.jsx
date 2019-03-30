import "./PostSort.css";
import LowCards from "./LowCards";
import LowCards2 from "./LowCards2";
import HighCards from "./HighCards";
import HighCards2 from "./HighCards2";
import NeutralCards from "./NeutralCards";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import store from "../../state";
import displayDataObject from "../../Utils/displayDataObjectPostSort";
import calculateTimeOnPage from "../../Utils/calculateTimeOnPage";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  paddingBottom: 25
};

let startTime;

class PostSort extends Component {
  componentDidMount() {
    startTime = Date.now();
  }

  componentWillUnmount() {
    calculateTimeOnPage(startTime, "postSortPage", "PostSortPage");
  }

  render() {
    // pull data from localStorage
    let columnStatements = JSON.parse(localStorage.getItem("columnStatements"));
    if (!columnStatements) {
      console.log("no local storage");
      columnStatements = store.getState().columnStatements;
    }

    console.log(
      "TCL: PostSort -> render -> columnStatements",
      columnStatements
    );

    const {
      titleText,
      nextButtonText,
      columnWidth,
      instructionsText,
      cardHeight
    } = this.props;

    const agreeObj = this.props.agreeObj;
    const disagreeObj = this.props.disagreeObj;
    const neutralObj = this.props.neutralObj;

    let highCards = columnStatements.vCols[agreeObj.columnDisplay];
    let highCards2 = columnStatements.vCols[agreeObj.columnDisplay2];
    let neutralCards = columnStatements.vCols[neutralObj.columnDisplay];
    let lowCards = columnStatements.vCols[disagreeObj.columnDisplay];
    let lowCards2 = columnStatements.vCols[disagreeObj.columnDisplay2];

    return (
      <div>
        <div className="titleDiv">
          <h1>{titleText}</h1>
          <h3>{instructionsText}</h3>
        </div>
        <div className="scrollableDiv">
          <div style={styles}>
            <HighCards
              agreeObj={agreeObj}
              height={cardHeight}
              width={columnWidth}
              highCards={highCards}
              columnDisplay={agreeObj.columnDisplay}
              columnStatements={columnStatements}
            />

            {agreeObj.displaySecondColumn && (
              <HighCards2
                agreeObj={agreeObj}
                height={cardHeight}
                width={columnWidth}
                highCards2={highCards2}
                columnDisplay={agreeObj.columnDisplay2}
                columnStatements={columnStatements}
              />
            )}

            {neutralObj.displayNeutralObjects && (
              <NeutralCards
                neutralObj={neutralObj}
                height={cardHeight}
                width={columnWidth}
                columnDisplay={neutralObj.columnDisplay}
                neutralCards={neutralCards}
                columnStatements={columnStatements}
              />
            )}

            {disagreeObj.displaySecondColumn && (
              <LowCards2
                disagreeObj={disagreeObj}
                height={cardHeight}
                width={columnWidth}
                lowCards2={lowCards2}
                columnStatements={columnStatements}
                columnDisplay={disagreeObj.columnDisplay2}
              />
            )}

            <LowCards
              disagreeObj={disagreeObj}
              height={cardHeight}
              width={columnWidth}
              lowCards={lowCards}
              columnStatements={columnStatements}
              columnDisplay={disagreeObj.columnDisplay}
            />
          </div>
        </div>
        <div className="footer fix-footer postSortFooter">
          <nav>
            <button
              onClick={displayDataObject}
              className="button is-link is-large is-inverted is-outlined is-pulled-right"
            >
              {" "}
              state
            </button>
            <Link
              className="button is-link is-large is-inverted is-outlined is-pulled-right"
              to="/survey"
            >
              {" "}
              {nextButtonText}
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default PostSort;
