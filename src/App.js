import React, { Component } from 'react';
import { CSSTransition  } from 'react-transition-group';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames='fade'
        >
          <div >Hello React Web App 111!</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
}

export default App;
