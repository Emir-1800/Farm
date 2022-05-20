import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="addSt">
      <h1 className="addContactH1">KG Farm</h1>
      <input
        className="addContactInputs"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="addContactInputs"
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
        value={lastName}
      />
      <input
        className="addContactInputs"
        onChange={(e) => setPhoto(e.target.value)}
        type="url"
        placeholder="URL Photo"
        value={photo}
      />
      <button className="addContactBtn" onClick={handleClick}>
        Add contact
      </button>
    </div>
  );
};

export default AddContact;
