import React, { useContext } from "react";
import { noteContext } from "../Context/NoteContextProvider";
import Note from "./Note";

const NoteList = () => {
  const noteCtx = useContext(noteContext);
  return (
    <div>
      <ul>
        {noteCtx.filteredNotes.map((item) => (
          <Note key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
