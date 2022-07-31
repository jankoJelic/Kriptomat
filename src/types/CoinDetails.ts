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
    circulating_supply: number;
    current_price: {
      eur: number;
    };
    high_24h: {
      eur: number;
    };
    low_24h: {
      eur: number;
    };
    market_cap: {
      eur: number;
    };
    price_change_percentage_7d: number;
    price_change_percentage_24h: number;
    price_change_percentage_30d: number;
    price_change_percentage_1y: number;
    total_volume: {
      eur: number;
    };
  };
}

export default CoinDetails;
