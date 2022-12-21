import React, { Component } from "react";
import { styles } from "./App.css";
import data from "./App.test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: data,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>
          <p className="header">CRUD PROJECT IN REACT JS BY CIVILLIAN_98</p>
        </h1>
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.task.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
