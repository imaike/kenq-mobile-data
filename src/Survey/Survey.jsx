import React from 'react';
import * as Survey from 'survey-react';
import prepareDataForPost from '../SubmitData/prepareDataForPost';
// import store from '../../state';
// import calculateTimeOnPage from '../../Utils/calculateTimeOnPage';

/* eslint react/prop-types: 0 */

let startTime;

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toSubmitData: false,
    };
    this.sendDataToSurver.bind(this);
  }

  // componentWillMount() {
  //   Survey.Survey.cssType = "bootstrap";
  // Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  // }

  componentDidMount() {
    // startTime = Date.now();
  }

  // componentWillUnmount() {
  // }

  sendDataToSurver = result => {
    // calculateTimeOnPage(startTime, 'surveyPage', 'SurveyPage');
    prepareDataForPost(this.props.commentArrays, result);
    // store.dispatch.setSurveyPageResuts(result);

    this.setState(() => ({
      toSubmitData: true,
    }));
  };

  render() {
    if (this.state.toSubmitData === true) {
      // return <Redirect to="/submitdata" />;
    }

    // let firebase = window.firebase;
    const json = JSON.stringify(this.props);
    console.log('TCL: SurveyForm -> render -> json', this.props.pages);

    return (
      <React.Fragment>
        <div>
          <Survey.Survey json={json} onComplete={this.sendDataToSurver} />
        </div>
        <div className="footer fix-footer postSortFooter">
          <nav />
        </div>
      </React.Fragment>
    );
  }
}

export default SurveyForm;
