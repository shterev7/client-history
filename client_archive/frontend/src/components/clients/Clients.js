import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClients, deleteClient } from "../../actions/clients";

export class Clients extends Component {
  static propTypes = {
    clients: PropTypes.array.isRequired,
    getClients: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    return (
      <Fragment>
        <h2>Clients</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Project</th>
              <th>Technology Stack</th>
              <th>Message</th>
              <th>Created At</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.clients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.project}</td>
                <td>{client.tech_stack}</td>
                <td>{client.message}</td>
                <td>{client.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteClient.bind(this, client.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default connect(
  mapStateToProps,
  { getClients, deleteClient }
)(Clients);
