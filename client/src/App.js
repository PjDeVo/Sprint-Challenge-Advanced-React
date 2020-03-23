import React from "react";
import "./App.css";
import axios from "axios";

import AddForm from "./components/AddPlayer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.players && <AddForm players={this.state.players} />}
      </div>
    );
  }
}

export default App;
