import { useNotes } from "../../context/note-context";
import { findNotesInArchive } from "../../utils/findnotesinthearchive";
export const NotesCard = ({ id, title, text, isPinned ,showArchive,noteType}) => {
  const { notesDispatch ,archive} = useNotes();

  const onPinclick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: {id} // just pass id, reducer handles toggle
    });
  };
  const isArchive=findNotesInArchive(archive,id)
  const removeclick=(id)=>{
    notesDispatch(
      {
        type:'REMOVE',
        payload:{id,noteType}
      }
    )
  }
  console.log(isPinned)

  const onarchiveclick=(id)=>{

   notesDispatch(
    isArchive?
    {
    type:'NOTE_ADD',
    payload:{id}
   }:{
    type:'ARCHIVE_ADD',
    payload:{id}
   })
  }
  return (
    <div
      key={id}
      className="w-74 rounded-lg p-4 bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold">{title}</p>
        <button
          onClick={() => onPinclick(id)}
          className={`transition-colors ${
            isPinned ? "text-red-600" : "text-black hover:text-yellow-500"
          }`}
        >
          <span className="material-symbols-outlined">push_pin</span>
        </button>
      </div>

      <p className="text-sm text-gray-700 mb-3">{text}</p>

      <div className="flex justify-end gap-2">
        <button className={isArchive?"text-black hover:text-blue-500":"text-gray-500 hover:text-blue-500"} onClick={()=>onarchiveclick(id)}>
          {
             showArchive &&  <span className="material-symbols-outlined">archive</span>
          }
          {/* <span className="material-symbols-outlined">archive</span> */}
        </button>
        <button className="text-gray-500 hover:text-red-500">
          <span className="material-symbols-outlined" onClick={()=>removeclick(id)}>delete</span>
        </button>
      </div>
    </div>
  );
};
