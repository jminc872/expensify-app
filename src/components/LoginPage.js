import React from 'react';
import { connect  } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <h3>Username</h3>
    <input type="text" />
    <h3>Password</h3>
    <input type="text" />
    <button onClick={startLogin}>Log in</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
