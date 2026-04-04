import React from "react";

const InputField = ({ label, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 p-2 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;