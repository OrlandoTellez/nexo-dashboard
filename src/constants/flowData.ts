import { Activity, Clock, Users, CheckCircle, Timer, AlertCircle, TrendingUp } from "lucide-react";


export const currentFlow = {
  reception: { count: 8, avgWait: "5 min", status: "normal" },
  triage: { count: 12, avgWait: "15 min", status: "busy" },
  waiting: { count: 24, avgWait: "23 min", status: "critical" },
  consultation: { count: 16, avgWait: "8 min", status: "normal" },
  pharmacy: { count: 6, avgWait: "12 min", status: "normal" },
  laboratory: { count: 9, avgWait: "18 min", status: "busy" },
  discharge: { count: 3, avgWait: "3 min", status: "normal" }
};

export const queueData = [
  { id: 1, patient: "María González", priority: "media", stage: "triage", waitTime: "15 min", estimatedTime: "10 min", condition: "Dolor abdominal" },
  { id: 2, patient: "Carlos Mendoza", priority: "alta", stage: "waiting", waitTime: "45 min", estimatedTime: "5 min", condition: "Dolor torácico" },
  { id: 3, patient: "Ana Pérez", priority: "baja", stage: "consultation", waitTime: "0 min", estimatedTime: "30 min", condition: "Control rutinario" },
  { id: 4, patient: "José Rivera", priority: "media", stage: "laboratory", waitTime: "20 min", estimatedTime: "15 min", condition: "Análisis de sangre" },
  { id: 5, patient: "Esperanza Silva", priority: "baja", stage: "pharmacy", waitTime: "8 min", estimatedTime: "5 min", condition: "Receta médica" }
];

export const stages = [
  { id: "reception", name: "Recepción", icon: Users, color: "blue" },
  { id: "triage", name: "Triaje", icon: Activity, color: "yellow" },
  { id: "waiting", name: "Sala de Espera", icon: Clock, color: "orange" },
  { id: "consultation", name: "Consulta", icon: CheckCircle, color: "green" },
  { id: "laboratory", name: "Laboratorio", icon: Timer, color: "purple" },
  { id: "pharmacy", name: "Farmacia", icon: AlertCircle, color: "indigo" },
  { id: "discharge", name: "Alta", icon: TrendingUp, color: "emerald" }
];

export const priorityConfig: Record<string, string> = {
  alta: "bg-red-100 text-red-800",
  media: "bg-yellow-100 text-yellow-800",
  baja: "bg-green-100 text-green-800"
};