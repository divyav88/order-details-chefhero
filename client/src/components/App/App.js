import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

import "./App.scss";
import Header from "../Header";
import Filter from "../Filter";
import Grid from "../Grid";
import Spinner from "../Spinner/Spinner";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="container">
          <Filter />
          <Grid />
        </div>
      </div>
      <Spinner />
    </Provider>
  );
}

export default App;
