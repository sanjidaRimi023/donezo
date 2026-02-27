import {
  BarChart3,
  Calendar,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import Logo from "./logo";
import SideButtomImage from "./SideButtomImage";

const NAV_DATA = {
  menu: [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Tasks", icon: ClipboardList, path: "/tasks", badge: "12+" },
    { name: "Calendar", icon: Calendar, path: "/calendar" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Team", icon: Users, path: "/team" },
  ],
  general: [
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "Help", icon: HelpCircle, path: "/help" },
  ],
};

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const NavItem = ({ item }: { item: (typeof NAV_DATA.menu)[0] }) => (
    <NavLink
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `group relative flex items-center justify-between px-8 py-3 transition-all ${
          isActive
            ? "text-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-10 bg-secondary rounded-r-full" />
          )}

          <div className="flex items-center gap-4">
            <item.icon
              size={22}
              strokeWidth={isActive ? 2.5 : 2}
              className={
                isActive
                  ? "text-secondary fill-secondary"
                  : "text-muted-foreground"
              }
            />
            <span className="text-sm tracking-tight">{item.name}</span>
          </div>

          {item.badge && (
            <span className="text-white bg-secondary text-xs px-2 py-0.5 rounded font-bold">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background m-4 rounded-2xl shadow-xl flex flex-col h-[calc(100vh-2rem)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-24 flex items-center justify-between px-8 shrink-0">
          <Logo />
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-full text-muted-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          {/* Menu */}
          <div className="mb-4">
            <h3 className="px-8 text-xs font-bold text-muted-foreground/60 uppercase mb-4 tracking-wider">
              Menu
            </h3>
            <nav className="flex flex-col">
              {NAV_DATA.menu.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>

          {/* General */}
          <div>
            <h3 className="px-8 text-xs font-bold text-muted-foreground/60 uppercase mb-4 tracking-wider">
              General
            </h3>
            <nav className="flex flex-col">
              {NAV_DATA.general.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}

              <button
                onClick={handleLogout}
                className="flex items-center gap-4 px-8 py-3 text-muted-foreground hover:text-destructive transition-colors w-full text-left mt-2"
              >
                <LogOut size={22} />
                <span className="text-sm tracking-tight">Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom CTA*/}
        <SideButtomImage />
      </aside>
    </>
  );
};

export default Sidebar;
