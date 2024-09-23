import { StockListItem } from './StockListItem';
import { STOCK_LIST } from '../store/data';
import { useSelector } from 'react-redux';

export const StockList = () => {
  const stockList = useSelector((state) => state.stock.stockList)
  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {stockList.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};
