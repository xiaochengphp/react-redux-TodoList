import React from 'react';

const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleAdd}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => {
            return (
              <li key={index} onClick={props.handleListDelete.bind(this, index)}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default TodoListUI;
