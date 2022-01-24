import React, { Component } from "react";
import { nanoid } from "nanoid";
import InputContact from "../InputContact/inputContact";
import ListContact from "../ListContact/listContact";
import Filter from "../Filter/filter";
import "./phonebook.css";

class phoneBook extends Component {
  inputNameID = nanoid();
  inputNumberID = nanoid();
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
    id: "",
  };

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  numberChange = (e) => {
    e.preventDefault();
    this.setState({ number: e.target.value });
  };

  addContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let arrayOfNames = this.state.contacts.map((arr) => arr.name);
    if (arrayOfNames.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState((state) => ({
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      }));
      this.addContactToLocalStore(this.state.name, this.state.number);
    }
    form.reset();
  };

  filterName = (e) => {
    e.preventDefault();
    this.setState({ filter: e.target.value });
  };

  removeContact = (idNumber) => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== idNumber),
    });
  };

  addContactToLocalStore = () => {
    localStorage.setItem("PhoneContacts", JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    let getContacts = localStorage.getItem("PhoneContacts");

    getContacts
      ? this.setState({ contacts: JSON.parse(getContacts) })
      : this.addContactToLocalStore();
  }

  componentDidUpdate() {
    this.addContactToLocalStore();
  }

  render() {
    return (
      <div>
        <h1 className="title">Phonebook</h1>
        <div className="border">
          <InputContact
            addContact={this.addContact}
            inputNameID={this.inputNameID}
            inputNumberID={this.inputNumberID}
            nameChange={this.nameChange}
            numberChange={this.numberChange}
          />
        </div>
        <h2 className="contact">Contacts</h2>

        <Filter filterName={this.filterName} />

        <ListContact
          filter={this.state.filter}
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default phoneBook;
