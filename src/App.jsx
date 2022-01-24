import './App.css';
import PhoneBook from "./components/Phonebook/phonebook"
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PhoneBook />
        </header>
      </div>
    );
  }
}

export default App;
