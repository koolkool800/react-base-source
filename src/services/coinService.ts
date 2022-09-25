
import axios from "axios";

export const fetchCoinData = async (searchKey= "") => {
    
    const response = await axios.get(`https://api.coinranking.com/v2/coins?limit=100&search=${searchKey}`);
    if (response?.status === 200) {
      const { stats, coins } = response.data?.data;
      const coinsNew = coins.map((crypt: any) => {
        return {
          uuid: crypt?.uuid,
          symbol: crypt?.symbol,
          name: crypt?.name,
          iconUrl: crypt?.iconUrl,
          marketCap: crypt?.marketCap,
          price: crypt?.price,
          change: crypt?.change,
          sparkline: crypt?.sparkline,
          color: crypt?.color
        };
      });
      return {
        stats,
        coins: coinsNew,
      };
    }
  };

  export const fetchCoinDataDetail = async (coinId: string | undefined) => {
    const response = await axios.get(`https://api.coinranking.com/v2/coin/${coinId}`);
    if (response?.status === 200) {
      return response.data?.data?.coin;
    }
  };

    export const fetchCoinHistory = async (coinId: string | undefined, timePeriod:string|number = "7d") => {
    const response = await axios.get(`https://api.coinranking.com/v2/coin/${coinId}/history?timePeriod=${timePeriod}`);
    if (response?.status === 200) {
      return response.data?.data;
    }
  };