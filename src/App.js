import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer1";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header>
          <button className="btn btn-dark">Przycisk</button>
          <p className="red">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            expedita enim praesentium ullam dolore veritatis, odit nam illo
            tempore, perspiciatis sed nemo voluptatem ut. At a vero enim ipsa
            nobis.
          </p>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
