import React, { Component } from 'react';
import { getInitList, initListAction, getTodoList, changeInputValue, addList, deleteListItem } from './store/action';
import TodoListUI from './TodoListUI';
import { connect } from 'react-redux';

// import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoListUI
        list={this.props.store.list}
        inputValue={this.props.store.inputValue}
        handleInputChange={this.props.handleInputChange}
        handleAdd={this.props.handleAdd}
        handleListDelete={this.props.handleListDelete}
      />
    );
  }

  componentDidMount() {
    this.props.disMount(initListAction(['componentWillMount', 'componentDidMount']));
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    disMount(action) {
      dispatch(action)
    },

    handleInputChange(e) {
      dispatch(changeInputValue(e.target.value))
    },

    handleAdd(e) {
      const { dispatch } = this.props;
      dispatch(addList(this.props.store.inputValue ? this.props.store.inputValue : '404'))
    },

    handleListDelete(index) {
      const { dispatch } = this.props;
      dispatch(deleteListItem(index))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
