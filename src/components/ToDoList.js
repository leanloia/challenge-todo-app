import React, { Component } from "react";
import { withServices } from "../lib/services/servicesProvider";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      title: "",
    };
  }
  componentDidMount() {
    this.getToDos();
  }

  getToDos = () => {
    return this.props
      .getAllToDos()
      .then((resp) => this.setState({ toDoList: resp }));
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    this.props
      .createToDo(title)
      .then((toDo) => {
        this.setState({ title: "" }, () => this.getToDos());
      })
      .catch((err) => console.log(err));
  };

  handleDeleteTask = (e, id) => {
      return this.props
      .deleteToDo(id)
      .then(() => this.getToDos())
      .catch(err => console.log(err))
  }

  //BACKLOG  -  cambiar Todo model to add state (done/undone)

  render() {
    let classDone;
    return (
      <div className="toDoList-container">
        <div className="todolist">
          <h1>To Do List</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="What needs to be done?"
            />
            <button type="submit">
              {"Add!"}
              <i class="fas fa-plus"></i>
            </button>
          </form>
          <ul>
            {this.state.toDoList &&
              this.state.toDoList.map((eachToDo) => {
                return (
                  eachToDo.doneTask
                    ? (classDone = "done")
                    : (classDone = "undone"),
                  (
                    <li key={eachToDo._id}>
                      <div className="todo-box">
                        <p
                          className={classDone}
                        //   onClick={(e) => this.handleDoneTask(e, eachToDo)}
                        >
                          {eachToDo.title}
                        </p>
                        <button
                          className="deletetask"
                          onClick={(e) => this.handleDeleteTask(e, eachToDo._id)}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  )
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withServices(ToDoList);
