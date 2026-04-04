import React from "react";

const SelectField = ({ label, name, value, onChange, options, error }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 p-2 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Pilih --</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;