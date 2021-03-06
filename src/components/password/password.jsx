import React, { Component } from 'react';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { password: 'p@ssw0rd' };
  }

  generatePassword() {
    // generate a password here
    console.log('Generating password...');
  }

  render() {
    return (
      <div className="password">
        <div>{this.state.password}</div>
        <div>
          <button onClick={() => this.generatePassword()}>
            Generate
          </button>
        </div>
      </div>
    );
  }
}

export default Password;
