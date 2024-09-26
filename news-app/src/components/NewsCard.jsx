import React, { useEffect } from 'react'

function NewsCard({newsArticle}) {
  return (
    <div className='p-4 bg-white shadow-md rounded-md border border-rose-300'>
        <img src={newsArticle.urlToImage} className='h-1/2 w-full' alt='image not found'/>
        <h2 className='text-lg font-bold'>{newsArticle.title}</h2>
        <p>{newsArticle.description}</p>
        <a 
            href={newsArticle.url} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='text-blue-500'>
                Read More ...
            </a>
    </div>
  )
}

export default NewsCard