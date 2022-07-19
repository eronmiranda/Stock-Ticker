import StockSearchForm from '../components/StockSearchForm.js';
import StockPriceDisplay from '../components/StockPriceDisplay.js';
import StockHistoryList from '../components/StockHistoryList.js'
import CurrentStockChart from '../components/CurrentStockChart.js'

const Search = () => {
  return <div>
    <h1>Search Page</h1>
    <div className="row">
      <StockSearchForm/>
      <StockPriceDisplay/>
    </div>
    <div className="row">
      <StockHistoryList/>
    </div>
    <div className="row">
      <CurrentStockChart/>
    </div>
  </div>
}

export default Search