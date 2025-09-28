import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import { PrivateRoute } from "./PrivateRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Appointments } from "../pages/Appointments";
import { Patients } from "../pages/Patients";
import { PatientsFlow } from "../pages/PatientsFlow";
import { NotFound } from "../pages/NotFound";
import App from "../App";                    

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<LoginForm />} />

            {/* Rutas Protegidas */}
            <Route element={<App />}>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/appointments"
                    element={
                        <PrivateRoute>
                            <Appointments />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/patients"
                    element={
                        <PrivateRoute>
                            <Patients />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/patient-flow"
                    element={
                        <PrivateRoute>
                            <PatientsFlow />
                        </PrivateRoute>
                    }
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
