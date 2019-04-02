import state from '../state';
// import state from '../../store';

// card and column styling
const getListStyle = (isDraggingOver, props, forcedSorts, columnWidth) => {
  // console.log(JSON.stringify(props.columnStatements));
  let isUnderMaxCards;
  if (forcedSorts === true) {
    isUnderMaxCards = props.columnStatementsArray.length <= props.maxCards;
  } else {
    isUnderMaxCards = true;
  }

  // to set highlighting for column headers
  if (isDraggingOver) {
    // state.setState({
    //     draggingOverColumnId: props.columnId
    // });
    // store.dispatch.setDraggingOverColumnId(props.columnId);
    state.setState({ draggingOverColumnId: props.columnId });
  }

  return {
    background: isDraggingOver
      ? 'lightblue'
      : isUnderMaxCards
      ? '#e4e4e4'
      : 'orange',
    padding: `3px 5px 0px 5px`,

    minWidth: columnWidth + 13,
    marginTop: 0,
    marginRight: 0,
    minHeight: props.minHeight,
    marginBottom: 220,
    border: 'solid 1px #ededed',
    borderRadius: `2px`,
  };
};

export default getListStyle;
