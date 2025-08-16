import { Fragment } from "react";
import { NavBar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/note-context";
import { Footbar } from "../../components/footer";

export const Home = () => {
  const { text, title, notes, notesDispatch } = useNotes();
  const pinnednotes = notes.filter(note => note.isPinned);
  const otherNotes = notes.filter(note => !note.isPinned);

  const ontitleChange = (e) =>
    notesDispatch({ type: "TITLE", payload: e.target.value });

  const ontextChange = (e) =>
    notesDispatch({ type: "TEXT", payload: e.target.value });

  const addclick = () => {
    notesDispatch({ type: "ADD" });
    notesDispatch({ type: "CLEAR" });
  };
  
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Main fills remaining space */}
        <main className="flex flex-1 overflow-auto">
          <Sidebar />

          <div className="flex-1 p-6 bg-gray-50 flex flex-col items-center gap-6">
            {/* Note input card */}
            <div className="relative bg-white shadow-md rounded-lg p-4 w-[320px] flex flex-col gap-3">
              <input
                value={title}
                onChange={ontitleChange}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter the title"
              />

              <textarea
                value={text}
                onChange={ontextChange}
                className="border border-gray-300 rounded-lg p-2 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter text"
              />

              <button
                disabled={title.length === 0}
                onClick={addclick}
                className="absolute bottom-3 right-3 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            {/* Pinned Notes */}
            {pinnednotes.length > 0 && (
              <section className="w-full">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-700">📌 Pinned Notes</h3>
                <div className="flex flex-wrap gap-4">
                  {pinnednotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} showArchive={true}/>
                  ))}
                </div>
              </section>
            )}

            {/* Other Notes */}
            {otherNotes.length > 0 && (
              <section className="w-full">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-700">📝 Other Notes</h3>
                <div className="flex flex-wrap gap-4">
                  {otherNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} showArchive={true} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <Footbar />
      </div>
    </Fragment>
  );
};
