// import store from "../../state";
import includes from 'lodash/includes';
import calculateTotalProjectTime from './calculateTotalProjectTime';
import getFormattedViewTime from '../Utils/getFormattedViewTime';

const prepareDataForPost = (commentArrays, surveyResults2) => {
  console.log('TCL: prepareDataForPost -> surveyResults2', surveyResults2);
  const surveyResults = surveyResults2.data;
  const columnStatements = JSON.parse(
    sessionStorage.getItem('columnStatements')
  );

  const endDate = getFormattedViewTime();

  // const projectStartTime = sessionStorage.getItem();
  // const sortCumulativeDuration = getCumulativeDuration(projectStartTime, 0);

  // console.log("TCL: prepareDataForPost -> endTime", endTime);

  // console.log(JSON.stringify(columnStatements));

  // let columnStatements = store.getState().columnStatements;
  const resultsJson = {};
  resultsJson.randomId8 = sessionStorage.getItem('randomId8');
  resultsJson.randomId16 = sessionStorage.getItem('randomId16');

  resultsJson.startDate = sessionStorage.getItem('startDate');
  resultsJson.endDate = endDate;

  // resultsJson.randomId8 = store.getState().randomId8;
  // resultsJson.startDate = store.getState().startDate;
  // resultsJson.startTime = store.getState().startTime;
  // resultsJson.finishTime = store.getState().finishTime;
  // resultsJson.landingPageDuration = store.getState().landingPageDurationCumulative;
  // resultsJson.homePageDuration = store.getState().homePageDurationCumulative;
  // resultsJson.preSortPageDuration = store.getState().preSortPageDurationCumulative;
  // // resultsJson.sortPageDuration = store.getState().sortPageDurationCumulative;
  // resultsJson.postSortPageDuration = store.getState().postSortPageDurationCumulative;
  // resultsJson.surveyPageDuration = store.getState().surveyPageDurationCumulative;
  // resultsJson.randomId8 = store.getState().randomId8;

  // assign sort values
  // sort by statementNum
  // push sort values into results array or compose sort string (using look-up object)

  resultsJson.homePageLastAccess = sessionStorage.getItem(
    'setHomePageLastAccess'
  );

  resultsJson.preSortPageLastAccess = sessionStorage.getItem(
    'setPreSortPageLastAccess'
  );

  resultsJson.sortPageLastAccess = sessionStorage.getItem(
    'setSortPageLastAccess'
  );

  resultsJson.postSortPageLastAccess = sessionStorage.getItem(
    'setPostSortPageLastAccess'
  );

  resultsJson.surveyPageLastAccess = sessionStorage.getItem(
    'setSurveyPageLastAccess'
  );

  resultsJson.homePageDuration = sessionStorage.getItem(
    'setHomePageDurationFormatted'
  );

  const preSortTime = sessionStorage.getItem('setPreSortPageDurationFormatted');

  const sortTime = sessionStorage.getItem('setSortPageDurationFormatted');

  const postSortTime = sessionStorage.getItem(
    'setPostSortPageDurationFormatted'
  );

  const surveyTime = sessionStorage.getItem('setSurveyPageDurationFormatted');

  const totalProjectTime = calculateTotalProjectTime(
    preSortTime,
    sortTime,
    postSortTime,
    surveyTime
  );

  resultsJson.preSortPageDuration = preSortTime;
  resultsJson.sortPageDuration = sortTime;
  resultsJson.postSortPageDuration = postSortTime;
  resultsJson.surveyPageDuration = surveyTime;
  resultsJson.totalProjetTime = totalProjectTime;

  // set up postSort comments in object
  const lookUpTable = {
    columnN6: -6,
    columnN5: -5,
    columnN4: -4,
    columnN3: -3,
    columnN2: -2,
    columnN1: -1,
    column0: 0,
    column1: 1,
    column2: 2,
    column3: 3,
    column4: 4,
    column5: 5,
    column6: 6,
    column7: 7,
    column8: 8,
    column9: 9,
    column10: 10,
    column11: 11,
    column12: 12,
    column13: 13,
  };

  const sortValueAssignedArray = [];
  const commentKeys = [];
  const columnStatementsVcolsKeys = Object.keys(columnStatements.vCols);

  // iterate through all sort columns
  for (let i = 0; i < columnStatementsVcolsKeys.length; i++) {
    // iterate within each sort column
    const identifier = columnStatementsVcolsKeys[i];

    for (let j = 0; j < columnStatements.vCols[identifier].length; j++) {
      // assign sort values
      columnStatements.vCols[identifier][j].sortValue = lookUpTable[identifier];
      // setup for comments integration
      if (includes(commentArrays, identifier)) {
        commentKeys.push(`${identifier}_Card${j + 1}`);
      }
    }
    sortValueAssignedArray.push(...columnStatements.vCols[identifier]);
  }

  // sort objects in array
  sortValueAssignedArray.sort((a, b) =>
    a.statementNum > b.statementNum ? 1 : -1
  );
  // assign the appropriate sort value to the string
  let sortString = '';
  for (let k = 0; k < sortValueAssignedArray.length; k++) {
    if (sortValueAssignedArray[k].sortValue >= 0) {
      sortString = `${sortString}+${sortValueAssignedArray[k].sortValue}|`;
    } else {
      sortString = `${sortString + sortValueAssignedArray[k].sortValue}|`;
    }
  }
  // trim last bar from string
  sortString = sortString.slice(0, -1);

  resultsJson.sort = sortString;

  const statementCommentsObj = JSON.parse(
    sessionStorage.getItem('statementCommentsObj')
  );
  // CREATE COMMENT OBJECT
  for (let m = 0; m < commentKeys.length; m++) {
    const comment = statementCommentsObj[commentKeys[m]];
    if (comment) {
      resultsJson[commentKeys[m]] = comment;
    } else {
      resultsJson[commentKeys[m]] = 'no comment entered';
    }
  }

  // add survey results to resultsJson object
  let keys = Object.keys(surveyResults);
  keys = keys.sort();

  for (let i = 0; i < keys.length; i++) {
    resultsJson[keys[i]] = surveyResults[keys[i]];
  }

  sessionStorage.setItem('resultsJson', JSON.stringify(resultsJson));
};

export default prepareDataForPost;
