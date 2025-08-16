import img from "../../assets/noteapp2.png";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r h-20 from-green-500 to-green-600 shadow-lg">
      {/* Left Section - Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
          <img
            src={img}
            alt="My logo"
            className="w-full h-full object-cover rounded-lg shadow-sm hover:scale-105 transition-transform"
          />
        </div>
        <h1 className="text-white text-2xl font-bold tracking-wide hover:text-green-100 transition-colors">
          Note It
        </h1>
      </div>

      {/* Middle Section - Search */}
      <div className="flex items-center bg-white rounded-lg shadow-sm px-3 py-1 w-80">
        <span className="material-symbols-outlined text-gray-500">search</span>
        <input
          type="text"
          placeholder="Search notes..."
          className="flex-1 px-2 py-1 focus:outline-none text-gray-700"
        />
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-4 text-white">
        <button className="hover:text-green-200 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="hover:text-green-200 transition-colors">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
};
