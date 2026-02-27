import { Bell, Command, Mail, Menu, Search } from "lucide-react";

const TopNav = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const userEmail = localStorage.getItem("user_email") || "User";

  return (
    <header className="h-20 bg-background my-4 mr-2 rounded-2xl px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
      >
        <Menu size={20} />
      </button>

      <div className="flex-1 px-4 lg:px-0">
        <div className="md:flex items-center hidden w-full max-w-sm px-4 py-2 bg-white border rounded-full shadow-sm">
          <Search className="w-5 h-5" />

          <input
            type="text"
            placeholder="Search task"
            className="flex-1 ml-3 text-lg bg-transparent outline-none placeholder:text-gray-400"
          />

          <div className="flex items-center px-2 py-1 ml-2 text-xs font-medium bg-background border rounded-md select-none">
            <span className="mr-1">
              <Command size={15} />
            </span>{" "}
            F
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-3 text-heading bg-white transition-colors rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-3 text-heading bg-white transition-colors rounded-full">
          <Mail size={20} />
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://github.com/shadcn.png"
            className="w-10 h-10 rounded-full"
            alt="user image"
          />
          <div className="hidden sm:block">
            <h4 className="">{userEmail.split("@")[0]}</h4>
            <p className="text-sm">{userEmail}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
