import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  handleTopicChange = (e) => {
    this.setState({ topic: e.target.value });
  };

  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="java">java</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
