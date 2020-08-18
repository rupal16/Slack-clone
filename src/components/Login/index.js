import React from "react";
import { Button } from "@material-ui/core";

import { auth, provider } from "../../config/firebase";
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

import "./style.css";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img src="data:image/png;base64,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" />
        <h1>Sign in to Slack!</h1>
        <p>welcome.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
