import { postLogin } from "../redux/action/authAction";
import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.postLogin(payload);
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <label id="email">Email</label>
        <input
          placeholder="Email"
          type="text"
          id="email"
          name="email"
          onChange={(e) => this.handleEmail(e)}
        ></input>
        <label id="password">Password</label>
        <input
          placeholder="Password"
          type="text"
          id="password"
          name="password"
          onChange={(e) => this.handlePassword(e)}
        ></input>
        <button onClick={(e) => this.handleLogin(e)}>Login</button>
        {console.log(this.props.status)}
        {!!this.props.status ? "Login Berhasil" : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { status: state.status.tokenLogin };
};

export default connect(mapStateToProps, {postLogin})(Login);