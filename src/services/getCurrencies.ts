import axios from 'axios';
import {COINS_URL} from 'constants/apiEndpoints';

const getCurrencies = async () => {
  const response = await axios.get(COINS_URL + '/markets', {
    params: {
      vs_currency: 'eur',
      order: 'market_cap_desc',
      per_page: 50,
      page: 1,
      sparkline: false,
    },
  });

  return response;
};

export default getCurrencies;
