import React from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Field = ({ label, ...props }: FieldProps) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium">{label}</label>
    <input {...props} className="w-full border rounded px-3 py-2" />
  </div>
);

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
}

export const SelectField = ({ label, options, placeholder, ...props }: SelectFieldProps) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium">{label}</label>
    <select {...props} className="w-full border rounded px-3 py-2">
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);
