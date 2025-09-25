import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  Activity,
  BarChart3,
  Stethoscope,
  LogOut,
  UserCircle,
  FileText,
} from "lucide-react";

const navigationItems = [
  { title: "Panel Principal", url: "/dashboard", icon: BarChart3 },
  { title: "Gestión de Citas", url: "/appointments", icon: Calendar },
  { title: "Gestión de Pacientes", url: "/patients", icon: Users },
  { title: "Flujo de Pacientes", url: "/patient-flow", icon: Activity },
];

const adminItems = [{ title: "Reportes", url: "/reports", icon: FileText }];

interface AppSidebarProps {
  userInfo: {
    name: string;
    role: string;
    hospital: string;
  };
  onLogout: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ userInfo, onLogout, collapsed, onToggle }: AppSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = (active: boolean) =>
    active
      ? "bg-[#2977f5] text-white font-medium border-r-2 border-blue-700"
      : "hover:bg-gray-200 text-gray-700";

  return (
    <div
      className={`flex flex-col h-screen fixed bg-white border-r transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#2977f5] rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold truncate">Portal Médico</h2>
              <p className="text-xs text-gray-500 truncate">Sistema Hospitalario</p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-gray-800"
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2">
        <div>
          {!collapsed && (
            <p className="text-xs text-gray-400 uppercase mb-2">Navegación Principal</p>
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
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        {!collapsed ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
              <UserCircle className="w-8 h-8 text-[#2977f5]" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{userInfo.name}</p>
                <p className="text-xs text-gray-500 truncate">{userInfo.role}</p>
                <p className="text-xs text-gray-500 truncate">{userInfo.hospital}</p>
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
