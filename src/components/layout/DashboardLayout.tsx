import { ReactNode } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "../ui/Input";
import { AppSidebar } from "./AppSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userInfo: {
    name: string;
    role: string;
    hospital: string;
  };
}

export function DashboardLayout({ children, userInfo }: DashboardLayoutProps) {
  const sidebarWidth = 256; // 64 * 4px = 256px (w-64)
  const sidebarCollapsedWidth = 64; // w-16

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar fijo */}
      <AppSidebar userInfo={userInfo} onLogout={() => { }} />

      {/* Contenido principal */}
      <div
        className={`flex flex-col min-h-screen transition-all`}
        style={{ marginLeft: sidebarWidth }}
      >
        {/* Header */}
        <header className="h-16 bg-white border-b border-l border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
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
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">
                3
              </span>
            </button>

            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-800">{userInfo.name}</p>
              <p className="text-xs text-gray-500">{userInfo.hospital}</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
