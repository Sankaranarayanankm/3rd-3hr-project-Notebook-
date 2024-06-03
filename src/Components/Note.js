import React, { useContext } from "react";
import { noteContext } from "../Context/NoteContextProvider";

const Note = (props) => {
  const noteCtx = useContext(noteContext);
  const deleteHandler = (id) => {
    noteCtx.deleteNote(id);
  };
  return (
    <li>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button onClick={() => deleteHandler(props._id)}>Delete</button>
    </li>
  );
};

export default Note;
