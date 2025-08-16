import { Fragment } from "react";
import { NavBar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/note-context";
import { Footbar } from "../../components/footer";

export const Bin = () => {
  const { bin } = useNotes();

  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Main fills remaining space */}
        <main className="flex flex-1 overflow-auto">
          <Sidebar />

          <div className="flex-1 p-6 bg-gray-50 flex flex-col items-center gap-6">
            {bin.length > 0 && (
              <section className="w-full">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-700">
                  🗑️ Bin
                </h3>
                <div className="flex flex-wrap gap-4">
                  {bin.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                      showArchive={false} // fixed spelling
                      noteType="bin" // so reducer knows it's from the bin
                    />
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
