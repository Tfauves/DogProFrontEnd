import React, { useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);

  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#303030",
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
        left: 0,
        flexDirection: "row",
        height: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0em 1.2em",
        }}
      >
        <NavButton
          style={{ fontFamily: "specialElite, cursive" }}
          to="/"
          label="DogPro"
        />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: "center",
          padding: "0em 1.2em",
          justifyContent: "flex-end",
        }}
      >
        {auth.token ? (
          <Fragment>
            <NavDropdown
              style={{
                fontSize: "1.35em",
                fontFamily: "specialElite, cursive",
                // color: "#f1f1f1",
              }}
              title="profile"
              id="nav-dropdown"
            >
              <NavDropdown.Item href="/profile">veiw profile</NavDropdown.Item>
              <NavDropdown.Item href="updateProfile">
                update profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/logout">logout</NavDropdown.Item>
              {/* to add link and divider */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Fragment>
        ) : (
          <Fragment>
            <NavButton
              style={{ fontFamily: "specialElite, cursive" }}
              to="/login"
              label="login"
            />
            <NavButton
              style={{ fontFamily: "specialElite, cursive" }}
              to="/register"
              label="sign up"
            />
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
