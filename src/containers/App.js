import React, { Component } from "react";
import InputReview from "../components/InputPreview";
import { connect } from "react-redux";
import {setMessage} from "../actions/message";
import {Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }
  
  _onChange = value => {
      this.props.dispatch(setMessage(value));
  }

  render() {

    const { message } = this.props.messageReducer;

    return (
      <div>
        <InputReview value={message} onChange={this._onChange} />
        <Link to="/about">
          <button> Go To About </button>
        </Link>
      </div>
    );
  }
}

export default connect(state => state)(App);
