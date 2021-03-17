import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import AuthRoute from "./util/AuthRoute";
import jwtDecode from "jwt-decode";
//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute
                exact
                path="/login"
                component={Login}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path="/signup"
                component={Signup}
                authenticated={authenticated}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
