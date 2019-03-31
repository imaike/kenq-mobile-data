import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Sort.css";
import * as cloneDeep from "lodash/cloneDeep";
import { view } from "react-easy-state";
import move from "./move";
import reorder from "./reorder";
import Headers from "./Headers";
import state from "../state";
import SortColumn from "./SortColumn";
import getListStyleHori from "./getListStyleHori";
import getItemStyleHori from "./getItemStyleHori";
import SortCompletedMessage from "./SortCompletedMessage";
import ColumnOverloadMessage from "./ColumnOverloadMessage";
import NumberCardsSortedMessage from "./NumberCardsSortedMessage";
// import displayStateObjectSort from "../../Utils/displayDataObjectSort";
// import calculateTimeOnPage from '../../Utils/calculateTimeOnPage';

/* eslint react/prop-types: 0 */

let startTime;

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggingOverColumnId: "column99"
    };
  }

  componentDidMount() {
    startTime = Date.now();
  }

  componentWillUnmount() {
    // calculateTimeOnPage(startTime, 'sortPage', 'SortPage');
  }

  // fire move and re-order functions
  onDragEnd = result => {
    /*
    example result object:
    result {"draggableId":"s1","type":"DEFAULT",
    "source":{"droppableId":"statements","index":0},
    "destination":{"droppableId":"column1","index":0},
    "reason":"DROP"}
    */

    // pull data from localStorage
    const columnStatements = JSON.parse(
      localStorage.getItem("columnStatements")
    );

    // source and destination are objects
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    // if moving inside the same column
    if (source.droppableId === destination.droppableId) {
      reorder(
        source.droppableId,
        source.index,
        destination.index,
        columnStatements
      );

      this.forceUpdate();
    } else {
      // moving to another column

      // source.droppableId give orgin id => "statements" or "columnN1"
      // sourceList is cards in that origin
      // gather data to send to move function
      let sourceListArray;
      let destinationListArray;
      if (source.droppableId === "statements") {
        sourceListArray = columnStatements.statementList;
      } else {
        sourceListArray = columnStatements.vCols[source.droppableId];
      }
      if (destination.droppableId === "statements") {
        destinationListArray = columnStatements.statementList;
      } else {
        destinationListArray = columnStatements.vCols[destination.droppableId];
      }
      const droppableSource = source;
      const droppableDestination = destination;
      const { totalStatements, sortCharacteristics } = this.props;
      move(
        sourceListArray,
        destinationListArray,
        droppableSource,
        droppableDestination,
        columnStatements,
        totalStatements,
        sortCharacteristics
      );

      // sortValue = sort value after drop
      // let sortValue = store.getState().currentSortValue;

      // let draggableId = result.draggableId;

      // let statementList = this.statementList;
      // console.log("TCL: Sort -> statementList", this);

      // let sortResults = store.getState().sortResults || this.statementList;
      // console.log("TCL: Sort -> sortResults", sortResults);

      // // insert sort value into sortResults array of statement objects
      // for (let i = 0; i < sortResults.length; i++) {
      //   if (sortResults[i].id === draggableId) {
      //     sortResults[i].sortValue = sortValue;
      //     break;
      //   }
      // }
      // let sortResultsText = "";
      // for (let j = 0; j < sortResults.length; j++) {
      //   let sortValue = sortResults[j].sortValue || "99";

      //   sortResultsText = sortResultsText + sortValue;
      //   if (j !== sortResults.length - 1) {
      //     sortResultsText = sortResultsText + "|";
      //   }
      // }

      // store.dispatch.setDraggingOverColumnId('column99');
      state.setState({ draggingOverColumnId: "column99" });

      // global state updates
      // store.dispatch.setColumnStatements(columnStatements);
      state.setState({ setColumnStatements: columnStatements });
      localStorage.setItem(
        "columnStatements",
        JSON.stringify(columnStatements)
      );
      // store.dispatch.setSortResults(sortResults);
      // localStorage.setItem("sortResults", JSON.stringify(sortResults));
      // store.dispatch.setSortResultsText(sortResultsText);
      // localStorage.setItem(
      // "sortResultsText",
      // JSON.stringify(sortResultsText)
      // );

      this.forceUpdate();
    }
  }; // end of dragEnd helper function

  render() {
    console.log("TCL: Sort -> render -> this.props", this.props);

    const {
      cardHeight,
      columnWidth,
      sortCompleteText,
      nextButtonText,
      horiCardMinHeight,
      headerColorsArray,
      sortCharacteristics,
      totalStatements
    } = this.props;

    // const { sortCharacteristics, totalStatements } = this.props;
    console.log(
      "TCL: Sort -> render -> sortCharacteristics",
      sortCharacteristics
    );
    const changeColumnHeaderColor = columnId => {
      this.setState({ draggingOverColumnId: columnId });
    };

    // pull data from localStorage
    const columnStatements = JSON.parse(
      localStorage.getItem("columnStatements")
    );

    const statements = columnStatements.statementList;
    // const overloadedColumn = store.getState().overloadedColumn;
    const overloadedColumn = state.getState("overloadedColumn");

    // MAP out SORT COLUMNS component before render
    // code inside render so that column lists update automatically
    const qSortHeaders = [...sortCharacteristics.qSortHeaders];
    const qSortHeaderNumbers = [...sortCharacteristics.qSortHeaderNumbers];
    const qSortPattern = [...sortCharacteristics.qSortPattern];
    const columns = qSortHeaders.map((value, index, highlightedColHeader) => {
      const columnId = "column" + qSortHeaders[index];
      const sortValue = qSortHeaderNumbers[index];

      return (
        <SortColumn
          key={columnId}
          minHeight={qSortPattern[index] * (cardHeight + 8) + 15}
          maxCards={qSortPattern[index]}
          columnId={columnId}
          columnStatementsArray={columnStatements.vCols[columnId]}
          forcedSorts={sortCharacteristics.forcedSorts}
          columnWidth={columnWidth}
          cardHeight={cardHeight}
          sortValue={sortValue}
          qSortHeaderNumber={qSortHeaderNumbers[index]}
          changeColumnHeaderColor={changeColumnHeaderColor}
        />
      );
    }); // end map of sort columns

    // returning main content => horizontal feeder
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="rootDiv">
          <Headers
            className="hoverBlue"
            qSortHeaders={qSortHeaders}
            qSortHeaderNumbers={qSortHeaderNumbers}
            columnWidth={columnWidth}
            headerColorsArray={headerColorsArray}
            highlightedColHeader={this.state.draggingOverColumnId}
          />
          {columns}
          <div className="sortFooter">
            <div className="cardSlider">
              <Droppable droppableId="statements" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyleHori(
                      snapshot.isDraggingOver,
                      horiCardMinHeight
                    )}
                  >
                    {statements.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        sortValue={item.sortValue}
                        cardColor={item.cardColor}
                      >
                        {(provided, snapshot) => (
                          <div
                            className={`${item.cardColor}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyleHori(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                              `${item.sortValue}`,
                              `${item.cardColor}`,
                              columnWidth,
                              cardHeight
                            )}
                          >
                            {item.statement}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <div className="footerMessageBox">
              <SortCompletedMessage
                sortCompleteText={sortCompleteText}
                nextButtonText={nextButtonText}
              />

              <ColumnOverloadMessage overloadedColumn={overloadedColumn} />

              <NumberCardsSortedMessage totalStatements={totalStatements} />
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default view(Sort);
