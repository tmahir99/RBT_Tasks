'use client'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ni34q5zmx0asn7yw.us.auth0.com"
    clientId="nU44QIDrwZJcUCjWTxAtvisgDfEK8Jmv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);