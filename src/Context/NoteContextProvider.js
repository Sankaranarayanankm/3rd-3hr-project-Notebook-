import React, { createContext, useReducer } from "react";
export const noteContext = createContext({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
});
const initialState={
  notes:[]
}
const reducer=(state,action)=>{
  if(action.type==='ADD'){
    // logic for adding note 
    return state;
  }
  else if(action.type==='DELETE'){
    // logic for deleting note 
    return state;
  }
  else return state;
}

const NoteContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addNoteHandler = (item) => {
    dispatch({ type: "ADD", item: item });
    console.log(item);
  };
  const deleteNoteHandler = (id) => {
    dispatch({ type: "DELETE", id: id });
  };
  const defaultValue = {
    notes: state.notes,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
  };
  return (
    <noteContext.Provider value={defaultValue}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteContextProvider;
