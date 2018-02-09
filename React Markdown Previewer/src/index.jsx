class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.output = document.getElementById('text-output');
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, () => {
      this.output.innerHTML = marked(this.state.value);
    });
  }

  render() {
    return (
        <form>
          <h5>Input:</h5>
          <textarea className="form-control" value={this.state.value} onChange={this.handleChange}></textarea>
        </form>
    );
  }
}

ReactDOM.render(<MarkdownInput />, document.getElementById('text-input'));
