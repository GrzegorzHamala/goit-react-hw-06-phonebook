import React from "react";

function inputContact({
  inputNameID,
  inputNumberID,
  nameChange,
  numberChange,
  addContact,
}) {
  return (
    <div>
      <form onSubmit={addContact}>
        <fieldset>
          <label htmlFor={inputNameID} className="letter">
            Name
          </label>
          <input
            className="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={nameChange}
            id={inputNameID}
          />
          <label htmlFor={inputNumberID} className="letter">
            Number
          </label>

          <input
            className="tel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={numberChange}
            id={inputNumberID}
          />

          <button type="submit" className="addBtn">
            Add contact
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default inputContact;
