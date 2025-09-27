import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description: string;
  change?: string;
  color?: string;
  type: metricType;
}

type metricType = "appointments" | "patients" | "attended" | "satisfaction";

export const MetricCard = ({ icon: Icon, title, value, description, change, color, type }: Props) => {
  const borderColor = 
    type === "appointments" ? "#007DE4" 
  : type === "patients" ? "#E55F5C" 
  : type === "attended" ? "#99C81899" 
  : "#FFBC3A";

  return (
<div
  className="p-4 border-l-4 rounded-xl bg-white"
  style={{ borderLeftColor: borderColor }}
>
  <div className="flex items-center justify-between">
    <Icon className={`h-5 w-5 ${color || "text-medical-blue"}`} />
    {change && <span className="text-xs text-green-600">{change}</span>}
  </div>
  <h3 className="text-lg text-[#161032] font-semibold mt-2">{title}</h3>
  <p className="text-2xl text-[#161032] font-bold">{value}</p>
  <p className="text-sm text-muted-foreground">{description}</p>
</div>

)};
