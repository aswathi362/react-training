import { useSelector, useDispatch } from 'react-redux';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  const portfolio = useSelector((state) => state.stock.portfolio);
  const error = useSelector((state) => state.stock.error);

  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <ul className="flex-column gap-1">
        {portfolio.map((stock) => (
          <PortfolioItem stock={stock} key={stock.id} />
        ))}
      </ul>
    </div>
  );
};