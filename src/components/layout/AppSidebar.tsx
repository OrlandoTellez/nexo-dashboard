import { NavLink} from "react-router-dom";
import {
  Calendar,
  Users,
  Activity,
  BarChart3,
  LogOut,
  UserCircle,
  FileText,
} from "lucide-react";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../context/AuthContext";

const navigationItems = [
  { title: "Panel Principal", url: "/", icon: BarChart3 },
  { title: "Gestión de Citas", url: "/appointments", icon: Calendar },
  { title: "Gestión de Pacientes", url: "/patients", icon: Users },
  { title: "Flujo de Pacientes", url: "/patient-flow", icon: Activity },
];

const adminItems = [{ title: "Reportes", url: "/reports", icon: FileText }];

interface AppSidebarProps {
  onLogout: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({  onLogout, collapsed, onToggle }: AppSidebarProps) {
  const { user } = useAuth();

  const getNavCls = (active: boolean) =>
    active
      ? "bg-[#fff] text-black "
      : "text-white";

  return (
    <div
      className={`flex flex-col h-screen fixed bg-white border-r transition-all duration-300 ${collapsed ? "w-16" : "w-64"
        }`}
    >
      {/* Header */}
      <div className="bg-[#161032] flex items-center justify-between p-4 border-b border-r border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#fff] rounded-lg flex items-center justify-center">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold truncate text-white">Portal Médico</h2>
              <p className="text-xs text-gray-500 truncate text-white">Sistema Hospitalario</p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="text-white"
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-[#161032] flex-1 overflow-y-auto px-2 py-4 space-y-2">
        <div>
          {!collapsed && (
            <p className="text-xs text-white uppercase mb-2">Navegación Principal</p>
          )}
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg ${getNavCls(isActive)}`
              }
            >
              <item.icon
                className={`w-5 h-5 ${collapsed ? "mx-auto" : "mr-3"}`}
              />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </div>

        <div className="mt-4">
          {!collapsed && (
            <p className="text-xs text-gray-400 uppercase mb-2">Administración</p>
          )}
          {adminItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                `flex text-white items-center p-2 rounded-lg ${getNavCls(isActive)}`
              }
            >
              <item.icon
                className={`w-5 h-5 ${collapsed ? "mx-auto" : "mr-3"}`}
              />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="bg-[#161032] p-4 border-t border-gray-700">
        {!collapsed ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
              <UserCircle className="w-8 h-8 text-[#2977f5]" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{user?.role}</p>
                <p className="text-xs text-gray-500 truncate">{user?.hospital}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="w-full flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <button className="w-8 h-8 p-0 mx-auto">
              <UserCircle className="w-5 h-5 text-[#2977f5]" />
            </button>
            <button
              onClick={onLogout}
              className="w-8 h-8 p-0 mx-auto text-red-600 hover:bg-red-100 rounded-lg flex items-center justify-center"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
