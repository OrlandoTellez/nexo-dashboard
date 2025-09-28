import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </QueryClientProvider>
  );
};

export default App;
