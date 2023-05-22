'use client'
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain="dev-ni34q5zmx0asn7yw.us.auth0.com"
      clientId="nU44QIDrwZJcUCjWTxAtvisgDfEK8Jmv"
      redirectUri={typeof window !== "undefined" && window.location.origin}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
