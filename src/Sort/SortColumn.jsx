import "./Sort.css";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import state from "../state";
import getItemStyle from "./getItemStyle";
import getListStyle from "./getListStyle";
import { view } from "react-easy-state";

/* eslint react/prop-types: 0 */

class SortColumn extends React.Component {
  render() {
    const {
      forcedSorts,
      columnWidth,
      cardHeight,
      columnId,
      sortValue,
      columnStatementsArray
    } = this.props;

    // had to push column sort value to state because didn't want to edit dnd library result object
    // was't able to just pass it as a prop
    return (
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => {
          if (snapshot.isDraggingOver) {
            // store.dispatch.setDraggingOverColumnId(this.props.columnId);
            state.setState({ draggingOverColumnId: columnId });
            // store.dispatch.setCurrentSortValue(this.props.sortValue);
            state.setState({ currentSortValue: sortValue });
          }

          return (
            <div
              ref={provided.innerRef}
              style={getListStyle(
                snapshot.isDraggingOver,
                this.props,
                forcedSorts,
                columnWidth
              )}
            >
              {columnStatementsArray.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style,
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
          );
        }}
      </Droppable>
    );
  }
}

export default view(SortColumn);
