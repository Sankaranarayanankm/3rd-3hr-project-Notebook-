import React, { createContext, useEffect, useReducer } from "react";
export const noteContext = createContext({
  notes: [],
  filteredNotes: [],
  filter: () => {},
  addNote: () => {},
  deleteNote: () => {},
});
const initialState = {
  notes: [],
  filteredNotes: [],
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newNotes = [...state.notes, action.item];
    return { ...state, notes: newNotes, filteredNotes: newNotes };
  } else if (action.type === "DELETE") {
    const updatedNotes = state.notes.filter((item) => item._id !== action.id);
    return { ...state, notes: updatedNotes, filteredNotes: updatedNotes };
  } else if (action.type === "FILTER") {
    const searchedValue = action.value.toLowerCase();
    const filteredNotes = searchedValue
      ? state.notes.filter((item) =>
          item.title.toLowerCase().includes(searchedValue)
        )
      : state.notes;
    return { ...state, filteredNotes };
  } else if (action.type === "SET_DATA") {
    return {
      ...state,
      notes: action.data,
      filteredNotes: action.data,
    };
  } else {
    return state;
  }
};

const NoteContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get the stored data from the backend using useEffect
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/c77dc1e7de24405b8b2e8d3af4c686d7/notes"
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData || "Failed to get data from backend");
        }
        const resData = await response.json();
        dispatch({ type: "SET_DATA", data: resData });
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const addNoteHandler = (item) => {
    async function storeData() {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/c77dc1e7de24405b8b2e8d3af4c686d7/notes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(
            errData.error.message || "Failed to store data in the backende"
          );
        }
        const resData = await response.json();
        dispatch({ type: "ADD", item: resData });
      } catch (error) {
        console.log(error);
      }
    }
    storeData();
  };
  const deleteNoteHandler = (id) => {
    async function deleteNote() {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/c77dc1e7de24405b8b2e8d3af4c686d7/notes/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message || "Failed to delete note");
        }
        dispatch({ type: "DELETE", id: id });
      } catch (error) {
        console.log(error);
      }
    }
    deleteNote();
  };
  const filterNotesHandler = (value) => {
    dispatch({ type: "FILTER", value: value });
  };
  const defaultValue = {
    notes: state.notes,
    filteredNotes: state.filteredNotes,
    filter: filterNotesHandler,
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
