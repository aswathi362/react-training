import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component'
import NavBar from '../components/NavBar';


function SearchNewsPage() {
    const [keyword, setKeyword] = useState("");
    const [newsArticles, setNewsArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(0);
    const [sort, setSort] = useState("publishedAt");

    const handleSearch = async () => {
        // const response = await getEverything({q: keyword, searchIn: 'title', sorttBy: sort, pageSize: 10, page});
        // console.log(response.data.articles)
        setNewsArticles((prev) => [...prev, ...response.data.articles]);
        setHasMore(response.data.articles.length > 0);
        setPage(page + 1);
        setCount(response.data.articles.length);
    }

    const handleChange = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        handleSearch();
    },[sort])

    
  return (
    <InfiniteScroll 
            dataLength={newsArticles.length} 
            next={handleSearch} 
            hasMore={hasMore} 
            loader={<h4 className='text-slate-400'>Loading...</h4>}
            >
        <div className='min-h-screen'>
            <NavBar/>
            <div className='p-4 text-center flex flex-col md:flex-row justify-between items-center'>
                <h1 className='text-rose-800 text-4xl font-bold'>Search News</h1>
                <div className='p-4'>
                    <input type='text' className='p-2 border rounded-md' placeholder='Type to start searching...' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    <button onClick={handleSearch} className='p-2 text-rose-800 mx-2 bg-white rounded-md shadow-md shadow-rose-300'>Search</button>
                    <select name='sortBy' onChange={handleChange} value={sort} className='p-2 rounded-md mx-4 shadow-md shadow-rose-300'>
                        <option value="publishedAt">Published At</option>
                        <option value="popularity">Popularity</option>
                        <option value="relevancy">Relevancy</option>
                    </select>
                </div>
            </div>
            
            {
                !count ? (
                    <h1 className="text-slate-500 text-xl text-center">
                        No news articles found...
                    </h1>
                ) : (
                    <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {newsArticles.map((article, index) => (
                            <NewsCard key={index} newsArticle={article} />
                        ))}
                    </div>
                )
            }       
        </div>
    </InfiniteScroll>
  )
}

export default SearchNewsPage