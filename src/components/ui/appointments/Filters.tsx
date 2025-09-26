import { Search } from "lucide-react";

interface Props {
  filter: string;
  searchTerm: string;
  onFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export const Filters = ({ filter, searchTerm, onFilterChange, onSearchChange }: Props) => (
  <div className="bg-white shadow rounded-lg p-4 space-y-4">
    <h2 className="font-semibold text-lg">Filtros de Búsqueda</h2>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre, cédula o especialidad..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="w-full md:w-48 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">Todos los estados</option>
        <option value="pending">Pendientes</option>
        <option value="confirmed">Confirmadas</option>
        <option value="in-progress">En Curso</option>
        <option value="completed">Completadas</option>
        <option value="cancelled">Canceladas</option>
      </select>
    </div>
  </div>
);
