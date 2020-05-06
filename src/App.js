import React, { Component } from "react";
// Main Component
import Main from "./components/MainComponent.js";
// Custom CSS
import "./App.css";
// Router
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore(); // Aliter name to call ConfigureStore

// App Component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
