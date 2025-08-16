import { v4 as uuid } from 'uuid'
export const noteReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'ADD':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            }
   
        case 'CLEAR':
            return {
                ...state,
                text: '',
                title: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map((note) => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)

            }

        case 'REMOVE':
            if (payload.noteType === "important") {
                return {
                    ...state,
                    bin: [...state.bin, state.important.find((imp) => imp.id === payload.id)],
                    important: state.important.filter((note) => note.id !== payload.id)
                };
            }else if(payload.noteType==="bin"){
                return{
                  ...state,
                  bin:state.bin.filter((binn)=>binn.id!==payload.id)
                }
            }
             else {
                return {
                    ...state,
                    bin: [...state.bin, state.notes.find((note) => note.id === payload.id)],
                    notes: state.notes.filter((note) => note.id !== payload.id)
                };
            }

        case 'ADD_IMP':
            return {
                ...state,
                important: [...state.important, { text: state.text, title: state.title, id: uuid() }]
            }
        
        case 'NOTE_ADD ':
            return{
                ...state,
                notes:[...state.notes,state.archive.find((note)=>note.id===payload.id)],
                archive:state.archive.filter((archives)=>archives.id!==payload.id)
            }    
        case 'ARCHIVE_ADD':
            return{
                ...state,
                archive:[...state.archive,state.notes.find((note)=>note.id===payload.id)],
                notes:state.notes.filter((note)=>note.id!==payload.id)
            }    

        default:
            return state;
    }
}