import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addClient } from "../../actions/clients";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    project: "",
    tech_stack: "",
    message: ""
  };

  static propTypes = {
    addClient: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email,project,tech_stack, message } = this.state;
    const client = { name, email,project,tech_stack, message };
    this.props.addClient(client);
    this.setState({
      name: "",
      email: "",
      project: "",
      tech_stack: "",
      message: ""
    });
  };

  render() {
    const { name, email,project,tech_stack, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Client</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Project</label>
            <input
              className="form-control"
              type="project"
              name="project"
              onChange={this.onChange}
              value={project}
            />
          </div>
          <div className="form-group">
            <label>Technology Stack</label>
            <input
              className="form-control"
              type="tech_stack"
              name="tech_stack"
              onChange={this.onChange}
              value={tech_stack}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addClient }
)(Form);
