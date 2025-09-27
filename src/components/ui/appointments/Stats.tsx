
interface Stats {
  total: number
  title: string
  icon: React.ReactNode
  color: string
}


export const Stats = ({ title, total, icon, color }: Stats) => (
  <div className="bg-white shadow rounded-lg flex items-center gap-5 h-[90px]">
    <div className="flex items-center h-full space-x-2 px-7 rounded-tr-[50%] rounded-br-[50%] text-white" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <div>
      <p className="text-2xl font-bold">{total}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);
