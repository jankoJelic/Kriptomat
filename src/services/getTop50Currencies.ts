import axios from 'axios';
import {BASE_URL} from 'constants/apiEndpoints';

const getTop50Currencies = async () => {
  const response = await axios.get(
    BASE_URL +
      '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false',
  );

  return response;
};

export default getTop50Currencies;
