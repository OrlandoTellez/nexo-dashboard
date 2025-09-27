import { ReactNode, useState } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "../ui/Input";
import { AppSidebar } from "./AppSidebar";
import iconProfil from "../../assets/profile.svg";

interface DashboardLayoutProps {
  children: ReactNode;
  userInfo: {
    name: string;
    role: string;
    hospital: string;
  };
}

export function DashboardLayout({ children, userInfo }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = 256; // w-64
  const sidebarCollapsedWidth = 64; // w-18

  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar
        userInfo={userInfo}
        onLogout={() => { }}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* Contenido principal */}
      <div
        className="flex flex-col min-h-screen transition-all duration-300"
        style={{ marginLeft: collapsed ? sidebarCollapsedWidth : sidebarWidth }}
      >
        {/* Header */}
        <header className="h-16 bg-[#161032] text-white border-b flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            {/* Buscador */}
            <div className="hidden md:flex items-center space-x-2 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar pacientes, citas..."
                  className="pl-10 h-9 w-full"
                />
              </div>
            </div>
          </div>

          {/* Notificaciones y usuario */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">
                3
              </span>

            </button>
            <button>
              <img src={iconProfil} alt="iconProfil" className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 bg-[#F1F1F1] overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
