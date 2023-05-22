'use client'
import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const App = () => {
  return (
    <Auth0Provider
      domain="https://dev-ni34q5zmx0asn7yw.us.auth0.com"
      clientId="ZX9O1FbiScrqLhL5bNXpOyGFC6dUReay"
      redirectUri="http://localhost:3000"
    >
      <LoginButton />
    </Auth0Provider>
  );
};

export default App;
