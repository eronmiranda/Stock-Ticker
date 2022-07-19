/** API key for signing the request */
const API_KEY = 'NW2PJY992CCHQB48';
/** Alpha Vantage REST endpoint */
const ENDPOINT = 'https://www.alphavantage.co/query?function=';

const Stock = function (attrs) {
  this.symbol = ""
  this.stockData = {}

  if (attrs) {
    Object.assign(this, attrs)
  }
}

/**
 * Returns the current stock price, symbol, and date
 * @returns {Promise} - resolves to {price, symbol, date}
 */
Stock.prototype.getStockPrice = function () {
    return fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${this.symbol}&apikey=${API_KEY}`).then(response => {
        return response.json();
    }).then(data => {
        // log and export all data
        if (data['Error Message']) {
            throw new Error(`There was an error fulfilling your request. Be sure you've entered a valid symbol`);
        }
        let {'01. symbol': symbol,
             '02. open': open,
             '03. high': high,
             '04. low': low,
             '05. price': price,
             '07. latest trading day': date,
             '08. previous close': prevClose
            } = data['Global Quote'];
        return Object.assign(this.stockData, {
          symbol,
          open,
          high,
          low,
          price,
          date,
          prevClose
         });
    }).catch(err => {
        return `There was an error: ${err}`;
    });
};

/**
 * Retursn the historical stock price data.
 * @returns {Promise} - resolves to {price, symbol, date}
 */
Stock.prototype.getStockFiveDayHistory = function () {
    return fetch(`${ENDPOINT}TIME_SERIES_DAILY&symbol=${this.symbol}&apikey=${API_KEY}`).then(response => {
        return response.json();
    }).then(data => {
        console.log(JSON.stringify(data))
        // log and export all data
        if (data['Error Message']) {
            throw new Error(`There was an error fulfilling your request. Be sure you've entered a valid symbol`);
        }
        // send only the most recent 5 days of data
        this.stockData.history = Object
            .entries(data['Time Series (Daily)'])
            .slice(0, 5)
            .map(day => {
                let {'1. open': open, '2. high': high, '3. low': low, '4. close': close} = day[1];
                return {open, high, low, close, date: day[0]};
            });
        return this.stockData;
    }).catch(err => {
        alert(`There was an error: ${err}`);
    });
};

export { Stock, API_KEY, ENDPOINT };
