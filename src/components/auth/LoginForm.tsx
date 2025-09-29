import { useState } from "react";
import { Stethoscope, Shield, Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function LoginForm() {
  const [username, setUsername] = useState('doctor@hospital.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor ingrese email y contraseña');
      return;
    }

    try {
      const success = await login(username, password);
      if (success) {
        navigate('/');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch {
      setError('Error al iniciar sesión');
    }
  };

  if (error) return <div>Error: {error}</div>;


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(217,91%,60%)]/50 to-[hsl(220,100%,100%)]/50">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-8 space-y-8">
        {/* Encabezado */}
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-[#2977f5] rounded-full flex items-center justify-center">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Portal Médico</h1>
            <p className="text-muted-foreground mt-2">
              Sistema Hospitalario de Nicaragua
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Correo Electrónico</label>
            <Input
              id="username"
              type="text"
              placeholder="doctor@hospital.gob.ni"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 pr-12"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#2977f5] hover:bg-primary-hover font-medium rounded-md text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2 justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verificando...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 justify-center">
                <Shield className="w-4 h-4" />
                <span>Iniciar Sesión</span>
              </div>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            Sistema seguro certificado por el Ministerio de Salud
          </p>
        </div>
      </div>
    </div>
  );
}
