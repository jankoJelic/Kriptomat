import axios from 'axios';
import {COINS_URL} from 'constants/apiEndpoints';
import {CURRENCY_ID} from 'constants/currency';

interface Props {
  days: number | string;
  id: string;
}

const getCurrencyChartData = async ({days, id}: Props) => {
  const response = await axios.get(COINS_URL + `/${id}/market_chart`, {
    params: {
      vs_currency: CURRENCY_ID,
      days,
      ...(days !== 1 && {interval: 'daily'}),
    },
  });

  return response;
};

export default getCurrencyChartData;
