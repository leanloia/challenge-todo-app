import React from "react";
import services from "./services";
const { Consumer, Provider } = React.createContext();

//Consumer
const withServices = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ getAllToDos, getToDo, createToDo, updateToDo, deleteToDo }) => {
            return (
              <WrappedComponent
                getAllToDos={getAllToDos}
                getToDo={getToDo}
                createToDo={createToDo}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

//Provider

class ServicesProvider extends React.Component {
  getAllToDos = () => {
    return services
      .getAllToDos()
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  getToDo = (id) => {
    return services
      .getToDo(id)
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  createToDo = (title) => {
    return services
      .createToDo(title)
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  updateToDo = (id) => {
    return services
      .updateToDo(id)
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  deleteToDo = (id) => {
    return services
      .deleteToDo(id)
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  render() {
    const { getAllToDos, getToDo, createToDo, updateToDo, deleteToDo } = this;

    return (
      <Provider
        value={{
          getAllToDos,
          getToDo,
          createToDo,
          updateToDo,
          deleteToDo,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withServices };
export default ServicesProvider;
