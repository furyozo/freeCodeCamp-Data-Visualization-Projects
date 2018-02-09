// node modules and components importing
import React from 'react';

// a user row in the leaderboard
class UserRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <tr>
        <th>{this.props.number}</th>
        <th>{this.props.name}</th>
        <th>{this.props.month_points}</th>
        <th>{this.props.all_points}</th>
      </tr>
    );
  }

}

export default UserRow;
