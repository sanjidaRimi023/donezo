import { LayoutDashboard, Users, Settings, LogOut, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Users", icon: Users, path: "/dashboard/users" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b">
          <span className="text-xl font-bold tracking-tight text-slate-900">VONDO.</span>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}><X size={20}/></button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;