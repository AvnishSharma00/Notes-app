import {  createContext,useContext,useReducer } from "react"
import { noteReducer } from "../reducers/noteReducers"
import { Archive } from "../pages/Archive";
const NotesContext=createContext();
const NotesProvider=({children})=>{

     const initialState = {
    text: "",
    title: "",
    notes: [],
    important:[],
    bin:[],
    archive:[]
  };

  const [{ text, title, notes ,bin,archive,important}, notesDispatch] = useReducer(
    noteReducer,
    initialState
  );

    return(
        <NotesContext.Provider value={{ text, title, notes ,important,bin,archive,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext);
export{NotesProvider,useNotes}