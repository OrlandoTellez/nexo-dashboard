import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./components/auth/LoginForm.tsx";
import { DashboardLayout } from "./components/layout/DashboardLayout.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Appointments } from "./pages/Appointments.tsx";
import { Patients } from "./pages/Patients.tsx";
import { PatientsFlow } from "./pages/PatientsFlow.tsx";
import { NotFound } from "./pages/NotFound.tsx";
const queryClient = new QueryClient();

interface User {
  email: string;
  name: string;
  role: string;
  hospital: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (credentials: { email: string; password: string; role: string }) => {
    // Simulación de autenticación exitosa
    const userData: User = {
      email: credentials.email,
      name: "Dr. Roberto Pérez Mendoza",
      role: "Médico General",
      hospital: "Hospital Nacional Dr. Roberto Huembes"
    };
    setUser(userData);
  };

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {!user ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <DashboardLayout userInfo={user}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/patient-flow" element={<PatientsFlow />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </DashboardLayout>
          )}
        </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;