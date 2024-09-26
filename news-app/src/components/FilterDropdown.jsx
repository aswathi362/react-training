import React from 'react'

function FilterDropdown({handleChange, options, name, value}) {
  return (
    <select name={name} onChange={handleChange} value={value} className='p-2 rounded-md shadow-rose-300 shadow-md'>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
  )
}

export default FilterDropdown