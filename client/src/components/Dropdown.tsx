import React, { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="flex items-center mb-4">
      <label className="mr-2 text-gray-300">{label}:</label>
      <select
        value={selectedOption || ""}
        onChange={handleSelect}
        className="bg-gray-900 text-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
