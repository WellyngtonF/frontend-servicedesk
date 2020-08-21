import "./dependencies/index";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./Pages/App";
import Auth from "./Pages/Auth";
import { validateToken } from "./Pages/Auth/auth.actions";

class LoginOrApp extends Component {
  componentDidMount() {
    const { user } = this.props.auth;
    if (user) {
      this.props.validateToken(user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;
      return <App />;
    } else {
      return <Auth />;
    }
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginOrApp);
