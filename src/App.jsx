import React, { Component } from "react";
import "./App.css";
import data from "./App.test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: data,
      selected: "name",
      name: "",
      status: "",
      age: "",
      edit: false,
      active: null,
      ism: "",
      stus: "",
      yosh: "",
    };
  }
  render() {
    const OnDelete = (id) => {
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
    const Onchange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
      console.log(name, value);
    };
    const onADD = (e) => {
      let useradd = {
        id: this.state.task.length + 1,
        name: this.state.name,
        status: this.state.status,
        age: this.state.age,
      };
      this.setState({
        task: [...this.state.task, useradd],
        name: "",
        status: "",
        age: "",
      });
    };
    const onUpdate = (useradd) => {
      this.setState({
        active: useradd,
        ism: useradd.name,
        stus: useradd.status,
        yosh: useradd.age,
      });
    };
    const onSave = () => {
      let res = this.state.task.map((val) =>
        val.id === this.state.active.id
          ? {
              ...this.state.active,
              name: this.state.ism,
              status: this.state.stus,
              age: this.state.yosh,
            }
          : val
      );
      this.setState({ task: res, active: {} });
      console.log(res, "save");
    };
    return (
      <>
        <div className="container">
          <h3>
            <p className="header">CRUD PROJECT IN REACT JS BY CIVILLIAN_98</p>
          </h3>
          <div className="searcher">
            <input
              className="search"
              placeholder="Search"
              type="text"
              onChange={onSearch}
            />
            <select className="selector" onChange={onSelect} name="" id="">
              <option name="name" value="name">
                NAME
              </option>
              <option name="status" value="status">
                STATUS
              </option>
              <option name="age" value="age">
                AGE
              </option>
            </select>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th>AGE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.task.map((val, index) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>
                      {this.state?.active?.id === val.id ? (
                        <input
                          type="text"
                          onChange={Onchange}
                          name="ism"
                          value={this.state.ism}
                          className="edit"
                        />
                      ) : (
                        val.name
                      )}
                    </td>
                    <td>
                      {this.state?.active?.id === val.id ? (
                        <input
                          type="text"
                          onChange={Onchange}
                          name="stus"
                          value={this.state.stus}
                          className="edit"
                        />
                      ) : (
                        val.status
                      )}
                    </td>
                    <td>
                      {this.state?.active?.id === val.id ? (
                        <input
                          type="text"
                          onChange={Onchange}
                          name="yosh"
                          value={this.state.yosh}
                          className="edit-age"
                        />
                      ) : (
                        val.age
                      )}
                    </td>
                    <td>
                      {this.state?.active?.id !== val.id ? (
                        <button onClick={() => onUpdate(val)}>UPDATE</button>
                      ) : (
                        <button onClick={onSave}>SAVE</button>
                      )}
                    </td>
                    <td>
                      <button onClick={() => OnDelete(val.id)}>DELETE</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="add-user">
            <input
              onChange={Onchange}
              placeholder="Name"
              className="adder"
              type="text"
              name="name"
              id=""
              value={this.state.name}
            />
            <input
              onChange={Onchange}
              placeholder="Status"
              className="adder"
              type="text"
              name="status"
              id=""
              value={this.state.status}
            />
            <input
              onChange={Onchange}
              placeholder="age"
              className="adder"
              type="text"
              name="age"
              id=""
              value={this.state.age}
            />
            <button onClick={onADD} className="adder-btn">
              Add
            </button>
          </div>
        </div>
        <div className="test">
          <p>NAME: {this.state.name}</p>
          <p>STATUS: {this.state.status}</p>
        </div>
      </>
    );
  }
}
