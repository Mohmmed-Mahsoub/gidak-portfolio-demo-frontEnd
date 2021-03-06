import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage/home";
import LoginPage from "./pages/login";
import NotFound from "./pages/notFound";
import AdminPage from "./pages/admin";
import PrivateRoute from "./pages/privateRoute";
import ContextProvider from "./context/userContext";
import DataContextProvider from "./context/dataContext";
import ThemeContextProvider from "./context/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <DataContextProvider>
          <ContextProvider>
            <Switch>
              <PrivateRoute path="/admin">
                <AdminPage />
              </PrivateRoute>
              <Route path="/home" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/notFound" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect to="/notFound" />
            </Switch>
          </ContextProvider>
        </DataContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
