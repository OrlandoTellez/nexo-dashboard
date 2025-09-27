import { Clock } from "lucide-react";

export const ModalHeader = ({ title, description }: { title: string; description: string }) => (
  <>
    <div className="flex items-center gap-2 mb-4">
      <Clock className="h-5 w-5 text-blue-600" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
  </>
);
