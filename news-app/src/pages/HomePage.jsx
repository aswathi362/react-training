import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import NewsFeed from '../components/NewsFeed';
import NavBar from '../components/NavBar';
import { getTopHeadlines, getEverything } from '../api/newsApi';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    category: "general",
    country: "us",
    language: "en",
    keyword: "",
    sortBy: ""
  });

  const handleSearch = async (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <div className='min-h-screen relative'>
      <div className='sticky top-0 left-0 right-0 bg-white'>
        <NavBar />
        <div className='px-4 text-center flex justify-between items-center flex-col'>
            <h1 className='text-rose-800 text-4xl font-bold py-4'>Top Headlines</h1>
            <FilterBar onSearch={handleSearch} />
        </div>
      </div>
      <div className='p-8'>
        <NewsFeed />
      </div>
    </div>
  );
}

export default HomePage;