// node modules and components importing
import React from 'react';

const imgStyle = {
  float: 'left',
  height: '3em',
  marginRight: '1em',
};
const h5style = {
  float: 'left',
}

// a user row in the leaderboard
class UserRows extends React.Component {
  render () {
    return (
      <tbody>
        {
          this.props.pages.map(function(page, i) {
            return (
              <tr key={i}>
                <th><h4>{i+1}</h4></th>
                <th><img style={imgStyle} className="img-responsive" src={page.img} alt="user-image"/><h4 style={h5style}>{page.username}</h4></th>
                <th><h4>{page.recent}</h4></th>
                <th><h4>{page.alltime}</h4></th>
              </tr>
            );
          })
        }
      </tbody>
    );
  }
}

export default UserRows;
