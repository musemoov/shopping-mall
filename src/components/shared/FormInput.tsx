'use client';

import { ChangeEvent } from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`w-full px-4 py-3 rounded-lg border ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#FF4500]'
        } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors shadow-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
} 