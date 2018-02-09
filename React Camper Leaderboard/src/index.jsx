// node modules and components importing
import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './js/components/AwesomeComponent.jsx';
import UserRow from './js/components/UserRow.jsx';

const uStyle = {
  cursor: 'pointer',
}

// main app component
class LeaderBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {normal_render_style: true};
    this.month_points = this.getMonthPoints();
    this.all_time_points = this.getAllTimePoints();
    this.switchPoints = this.switchPoints.bind(this);
  }

  switchPoints() {
    if (this.state.normal_render_style)
      this.setState({normal_render_style: false});
    else
      this.setState({normal_render_style: true});
  }

  getMonthPoints() {
    var value = $.getJSON({
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      async: false
    }).responseText;
    return JSON.parse(value);
  }

  getAllTimePoints() {
    var value = $.getJSON({
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
      async: false
    }).responseText;
    return JSON.parse(value);
  }

  render () {
    if (this.state.normal_render_style === true) {
      return (
        <div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th style={uStyle}><u>Last 30 days</u></th>
                  <th style={uStyle} onClick={this.switchPoints}>All time points</th>
                </tr>
              </thead>
              {/* tbody */}
              <UserRow pages={this.month_points} />
            </table>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th style={uStyle} onClick={this.switchPoints}>Last 30 days</th>
                  <th style={uStyle}><u>All time points</u></th>
                </tr>
              </thead>
              {/* tbody */}
              <UserRow pages={this.all_time_points} />
            </table>
          </div>
        </div>
      );
    }
  }
}

render(<LeaderBoard/>, document.getElementById('app'));
