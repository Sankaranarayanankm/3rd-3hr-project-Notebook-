import React, { useState } from "react";

const Layout = (props) => {
  const [search, setSearch] = useState("");
  const totalNotes=0;
  const showing=0;
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
    <div className="layout">
      <h1>Note Book</h1>
      <div>
        <label htmlFor="search">Search</label>
        <input type="search" value={search} onChange={searchHandler} />
      </div>
      <div>
        <p>Total Notes: {totalNotes} </p>
        <p>Showing: {showing}</p>
      </div>
      <button onClick={props.show}>Add Note</button>
    </div>
    <div>
      <ul>
        {/* render the notes here  */}
      </ul>
    </div>
    </>
  );
};

export default Layout;
