export const findNotesInArchive=(archive,id)=>{
    return archive.some((arc)=>arc.id===id)

}