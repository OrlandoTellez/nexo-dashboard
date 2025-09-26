export interface Patient {
  id: number;
  name: string;
  condition: string;
  room: string;
  priority: "Alta" | "Media";
}