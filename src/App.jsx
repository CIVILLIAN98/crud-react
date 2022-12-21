import React, { Component } from "react";
import "./App.css";
import data from "./App.test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: data,
      selected: "name",
    };
  }
  render() {
    const OnDelete = (id) => {
      console.log(id, "id");
      const res = this.state.task.filter((val) => val.id !== id);
      this.setState({ task: res });
    };
    const onSearch = (e) => {
      const search = data.filter((val) =>
        val[this.state.selected]
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      this.setState({ task: search });
    };
    const onSelect = (e) => {
      this.setState({ selected: e.target.value });
    };
    return (
      <div className="container">
        <h1>
          <p className="header">CRUD PROJECT IN REACT JS BY CIVILLIAN_98</p>
        </h1>
        <input
          className="search"
          placeholder="Search"
          type="text"
          onChange={onSearch}
        />
        <select onChange={onSelect} name="" id="">
          <option value="name">NAME</option>
          <option value="status">STATUS</option>
        </select>
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.task.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.status}</td>
                  <td>
                    <button>UPDATE</button>
                  </td>
                  <td>
                    <button onClick={() => OnDelete(val.id)}>DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
