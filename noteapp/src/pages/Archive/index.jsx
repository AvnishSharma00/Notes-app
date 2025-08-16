import { Fragment } from "react"
import { NavBar } from "../../components/navbar"
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/sidebar"
import { Footbar } from "../../components/footer"
import { useNotes } from "../../context/note-context"
export const Archive=()=>{
  
const {archive}=useNotes()
          return (
            <Fragment>
              <div className="flex flex-col min-h-screen">
                <NavBar />
        
                {/* Main fills remaining space */}
                <main className="flex flex-1 overflow-auto">
                  <Sidebar />
        
                  <div className="flex-1 p-6 bg-gray-50 flex flex-col items-center gap-6">
                    {archive.length > 0 && (
                      <section className="w-full">
                        <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-700">
                          🗃️ Archive
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {archive.map(({ id, title, text, isPinned }) => (
                            <NotesCard
                              key={id}
                              id={id}
                              title={title}
                              text={text}
                              isPinned={isPinned}
                              showArchive={true} // fixed spelling
                              archievebold={true} // so reducer knows it's from the bin
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
    
}