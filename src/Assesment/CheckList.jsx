import React from 'react'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOption } from './checklistSlice';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
export default function CheckList() {
    const dispatch = useDispatch();
    const selectedOptions = useSelector(state => state.checklist);
  
    const handleCheckboxChange = (event) => {
      const option = event.target.value;
      dispatch(toggleOption(option));
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Checklist</h1>
        {options.map(option => (
          <div key={option} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={option}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Selected Options:</h2>
          <ul className="list-disc list-inside">
            {selectedOptions.map(option => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}
