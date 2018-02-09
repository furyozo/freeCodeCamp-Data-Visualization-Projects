// node modules and components importing
import React from 'react';

// a simple react component for liking different posts
class AwesomeComponent extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.pages.map(function(page, i) {
            return <div key={i}>Title: {page.title}. Text: {page.text}</div>;
          })
        }
      </div>
    );
  }
}

export default AwesomeComponent;
