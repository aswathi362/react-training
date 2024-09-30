import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsCard from '../components/NewsCard';

describe('NewsCard Component', () => {
  const mockArticle = {
    title: 'Test News Title',
    description: 'Test News Description',
    urlToImage: 'https://example.com/image.jpg',
    url: 'https://example.com/news',
  };

  test('renders news article information correctly', () => {
    render(<NewsCard newsArticle={mockArticle} />);

    expect(screen.getByText('Test News Title')).toBeInTheDocument();

    expect(screen.getByText('Test News Description')).toBeInTheDocument();

    const readMoreLink = screen.getByText('Read More ...');
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', 'https://example.com/news');

    const image = screen.getByAltText('image not found');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('displays placeholder text for missing image', () => {
    const articleWithoutImage = { ...mockArticle, urlToImage: null };
    render(<NewsCard newsArticle={articleWithoutImage} />);

    expect(screen.getByAltText('image not found')).toBeInTheDocument();
  });

  test('snapshot matches the rendered component', () => {
    const { container } = render(<NewsCard newsArticle={mockArticle} />);
    
    expect(container).toMatchSnapshot();
  });
});
