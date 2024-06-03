import React, { useState } from "react";
import NoteContextProvider from "./Context/NoteContextProvider";
import NewNote from "./Components/NewNote";
import Layout from "./Components/Layout";
import NoteList from "./Components/NoteList";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <NoteContextProvider>
      <Layout show={showModalHandler} />
      {showModal && <NewNote hide={hideModalHandler} />}
      <NoteList />
    </NoteContextProvider>
  );
};

export default App;
