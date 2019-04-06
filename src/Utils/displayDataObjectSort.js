import store from "../state";

const displayDataObject = () => {
  // landing
  const results = store.getState().agreeObj;
  const results2 = store.getState().disagreeObj;
  const columnList = store.getState().columnStatements;
  const columnStatements2 = JSON.parse(
    sessionStorage.getItem("columnStatements")
  );

  console.log("agreeObj => ", JSON.stringify(results));
  console.log("disagreeObj => ", JSON.stringify(results2));
  console.log("columnStatements => ", JSON.stringify(columnList));
  console.log(
    "columnStatements from sessionStorage => ",
    JSON.stringify(columnStatements2)
  );
};

export default displayDataObject;
