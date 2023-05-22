'use client'
import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain="dev-ni34q5zmx0asn7yw.us.auth0.com"
      clientId="ZX9O1FbiScrqLhL5bNXpOyGFC6dUReay"
      authorizationParams={{
          redirectUri:"http://localhost:3000"
      }}
    >
      <LogoutButton />
    </Auth0Provider>
  );
};

export default App;
