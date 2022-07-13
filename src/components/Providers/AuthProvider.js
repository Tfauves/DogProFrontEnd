import React, { useState, useEffect } from "react";

const AuthContext = React.createContext([{}, () => {}, () => {}]);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    token: null,
    name: null,
    profile: null,
    roles: [],
  });

  const saveAuth = (newAuth) => {
    if (localStorage["Token"] != undefined) {
      localStorage.removeItem("Token");
      localStorage.removeItem("Profile");
      localStorage.removeItem("Roles");
    }
    localStorage.setItem("Token", JSON.stringify(newAuth.token));
    localStorage.setItem(
      "Profile",
      JSON.stringify({ id: newAuth.id, username: newAuth.username })
    );
    localStorage.setItem("Roles", JSON.stringify(newAuth.roles));
  };
  //if this was a data collecting provider
  //the use effect method would go here

  useEffect(() => {
    if (localStorage["Token"] != undefined) {
      setAuth({
        token: JSON.parse(localStorage["Token"]),
        profile: {
          id: JSON.parse(localStorage["Profile"]).id,
          username: JSON.parse(localStorage["Profile"]).username,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth, saveAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
