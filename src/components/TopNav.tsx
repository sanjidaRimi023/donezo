import { Menu, Bell, UserCircle } from "lucide-react";

const TopNav = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const userEmail = localStorage.getItem("user_email") || "User";

  return (
    <header className="h-16 bg-white border-b px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <button onClick={onMenuClick} className="p-2 hover:bg-slate-100 rounded-lg lg:hidden">
        <Menu size={20} />
      </button>

      <div className="flex-1 px-4 lg:px-0">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider hidden md:block">
          System Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-black transition-colors"><Bell size={20} /></button>
        <div className="h-8 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-none">{userEmail.split('@')[0]}</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">Administrator</p>
          </div>
          <UserCircle size={32} className="text-slate-300" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;