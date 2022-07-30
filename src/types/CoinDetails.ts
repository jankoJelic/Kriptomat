interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      eur: number;
    };
    high_24h: {
      eur: number;
    };
    low_24h: {
      eur: number;
    };
    price_change_percentage_24h: number;
  };
}

export default CoinDetails;
