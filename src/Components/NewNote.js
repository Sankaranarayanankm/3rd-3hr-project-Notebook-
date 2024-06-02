import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {v4 as uuid} from 'uuid';

const NewNote = (props) => {
  const [state, setState] = useState({
    title: "",
    desc: "",
  });
  const changeHandler = (event) => {
    const {name, value} = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newNote={
      ...state,
      id:uuid()
    }
    console.log(newNote);
  };
  return (
    <Modal>
      <h2>Add New Note</h2>
      <form onSubmit={submitHandler} className="new_note">
        <div>
          <label htmlFor="title">Note Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={state.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Note Desc:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={state.desc}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button>Add to Book</button>
          <button type="button" onClick={props.hide}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewNote;
