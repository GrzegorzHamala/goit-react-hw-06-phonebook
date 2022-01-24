import React from "react";

function listContact({ filter, contacts, removeContact }) {
  return (
    <div>
      <ul className="contact__list">
        {filter === ""
          ? contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button
                  type="button"
                  className="delBtn"
                  onClick={() => removeContact(id)}
                >
                  Delete
                </button>
              </li>
            ))
          : contacts
              .filter(({ name }) => name.toLowerCase().includes(filter))
              .map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                  <button
                    type="button"
                    className="delBtn"
                    onClick={() => removeContact(id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
      </ul>
    </div>
  );
}

export default listContact;
