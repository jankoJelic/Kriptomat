import axios from 'axios';
import {COINS_URL} from 'constants/apiEndpoints';
import {CURRENCY_ID} from 'constants/currency';

const getCurrencies = async () => {
  const response = await axios.get(COINS_URL + '/markets', {
    params: {
      vs_currency: CURRENCY_ID,
      order: 'market_cap_desc',
      per_page: 50,
      page: 1,
      sparkline: false,
    },
  });

  return response;
};

export default getCurrencies;
