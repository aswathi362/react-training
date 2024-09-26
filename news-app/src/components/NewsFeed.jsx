import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getTopHeadlines, getEverything } from '../api/newsApi';
import NewsCard from './NewsCard';
import { useNews } from '../context/NewsContext';

function NewsFeed() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { filters } = useNews();
  useEffect(() => {
    fetchFilteredNews(true);
  }, [filters]);

  const fetchNews = async (reset = false) => {
    let response;
    if (filters.keyword) {
      // Keyword search API
      response = await getEverything({ q: filters.keyword, sortBy: filters.sortBy || 'publishedAt', pageSize: 10, page: page});
    } else {
      // Top headlines API
      response = await getTopHeadlines({ category: filters.category, country: filters.country, language: filters.language, pageSize: 10, page: page});
    }
    // console.log(response)
    const filteredArticles = response.data.articles.filter(
      (article) => article.title !== '[Removed]' && article.urlToImage
    );

    if (reset) {
      setNewsArticles(filteredArticles);
    } else {
      setNewsArticles((prev) => [...prev, ...filteredArticles]);
    }
    setHasMore(filteredArticles.length > 0);
    setPage((prevPage) => prevPage + 1);
  };

  const fetchFilteredNews = async (reset = false) => {
    setPage(1);
    await fetchNews(reset);
  };

  return (
    <>
      {newsArticles.length === 0 ? (
        <h2 className="text-center text-slate-500 text-xl">No articles found</h2>
      ) : (
        <InfiniteScroll
          dataLength={newsArticles.length}
          next={fetchNews}
          hasMore={hasMore}
          loader={<h4 className='text-slate-400'>Loading...</h4>}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {newsArticles.map((article, index) => (
              <NewsCard key={index} newsArticle={article} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default NewsFeed;