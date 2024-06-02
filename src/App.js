import React, { useState } from "react";
import NoteContextProvider from "./Context/NoteContextProvider";
import NewNote from "./Components/NewNote";
import Layout from "./Components/Layout";

const App = () => {
  const [showModal, setShowModal] = useState(true);
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
    </NoteContextProvider>
  );
};

export default App;
