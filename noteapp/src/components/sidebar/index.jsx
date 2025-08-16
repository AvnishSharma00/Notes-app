import { NavLink } from 'react-router-dom'
export const Sidebar = () => {
    const getStyle=({isActive})=>{

        return isActive?'flex align-middle gap-1 px-2 py-1 rounded-tr-full rounded-br-full text-white bg-green-400 ':' hover:bg-green-400 hover:text-white flex align-middle gap-1 px-2 py-1 rounded-tr-full rounded-br-full '

    }

    return (
        <>
            <aside className='flex flex-col gap-3 border-r-2 w-42 pl-2 pt-1 border-gray-400 h-screen '>
                <NavLink className={getStyle} to='/'> <span class="material-symbols-outlined">
                    home</span><span>Home</span></NavLink>
                <NavLink className={getStyle} to='/archive' ><span class="material-symbols-outlined">
                    archive
                </span><span>Archive</span></NavLink>
                <NavLink className={getStyle} to='/important'><span class="material-symbols-outlined">
                    label_important
                </span><span>Important</span></NavLink>
                <NavLink className={getStyle} to='/bin'><span class="material-symbols-outlined">
                    delete
                </span><span>Bin</span></NavLink>
            </aside>

        </>
    )

}