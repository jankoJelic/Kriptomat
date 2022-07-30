import axios from 'axios';
import {COINS_URL} from 'constants/apiEndpoints';

const getCurrency = async (id: string) => {
  const response = await axios.get(COINS_URL + `/${id}`);

  return response;
};

export default getCurrency;
