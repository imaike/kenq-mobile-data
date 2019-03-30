// horizontal column styling
const getListStyleHori = (isDraggingOver, horiCardMinHeight) => ({
  background: isDraggingOver ? 'lightblue' : '#e4e4e4',
  padding: 8,
  paddingRight: 18,
  paddingLeft: 18,
  display: 'flex',
  minWidth: 850,
  minHeight: horiCardMinHeight,
  overflowX: `scroll`,
  flexDirection: 'row-reverse',
});

export default getListStyleHori;
