import React from 'react'
import { useNews } from '../context/NewsContext'
import FilterDropdown from './FilterDropdown';
import Button from './Button';

function FilterBar({ onSearch }) {
    const {filters, setFilters} = useNews();
    const categoryOptions = [
        { value: "general", label: "General" },
        { value: "entertainment", label: "Entertainment" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" }
    ];

    const countryOptions = [
        { value: "us", label: "United States" },
        { value: "gb", label: "United Kingdom" },
        { value: "de", label: "Germany" },
        { value: "fr", label: "France" }
    ];

    const languageOptions = [
        { value: "en", label: "English" },
        { value: "fr", label: "French" },
        { value: "de", label: "German" }
    ];
    
    const sortByOptions = [
        { value: "publishedAt", label: "Published At" },
        { value: "popularity", label: "Popularity" },
        { value: "relevancy", label: "Relevancy" }
    ];

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        onSearch();
    }
  return (
    <div className='flex space-y-4 md:space-x-4 md:space-y-0 p-4 flex-col md:flex-row w-full justify-between bg-gray-300 rounded-md'>
        <div className='flex space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row items-center'>
            <p>Filters: </p>
            <FilterDropdown handleChange={handleChange} options={categoryOptions} name={"category"} value={filters.category}/>
            <FilterDropdown handleChange={handleChange} options={countryOptions} name={"country"} value={filters.country}/>
            <FilterDropdown handleChange={handleChange} options={languageOptions} name={"language"} value={filters.language}/>
        </div>
        <div className='flex space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row items-center'>
            <p>Search: </p>
            <input type='text' className='p-2 border rounded-md' placeholder='Type to start searching...' name="keyword" value={filters.keyword} onChange={handleChange}/>
            <FilterDropdown handleChange={handleChange} options={sortByOptions} name={"sortBy"} value={filters.sortBy}/>
            <Button onClick={handleSearch} text={'Search'}/>
        </div>
    </div>
  )
}

export default FilterBar