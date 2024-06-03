import React, { useContext, useState } from "react";
import { noteContext } from "../Context/NoteContextProvider";

const Layout = (props) => {
  const noteCtx=useContext(noteContext);
  // const [search, setSearch] = useState("");
  const totalNotes=noteCtx.notes.length;
  const showing=noteCtx.filteredNotes.length;
  const searchHandler = (event) => {
    // setSearch(event.target.value);
    noteCtx.filter(event.target.value);
  };
  return (
    <>
    <div className="layout">
      <h1>Note Book</h1>
      <div>
        <label htmlFor="search">Search</label>
        <input type="search" onChange={searchHandler} />
      </div>
      <div>
        <p>Total Notes: {totalNotes} </p>
        <p>Showing: {showing}</p>
      </div>
      <button onClick={props.show}>Add Note</button>
    </div>

    </>
  );
};

export default Layout;
