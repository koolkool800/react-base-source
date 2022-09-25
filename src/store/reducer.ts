import { GET_COINS } from "../util/constant";

type Stats = {
  total: string;
  total24hVolume: string;
  totalExchanges: number | undefined;
  totalMarketCap: string;
  totalMarkets: number | undefined;
  totalCoins?: number | undefined;
};
export type Coins = {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  change: string;
  sparkline: [string];
  color: string
};
export type State = {
  stats: Stats;
  coins: [Coins] | [];
};
export type Action = {
  type: string;
  payload?: any;
};

const initialState: State = {
  stats: {
    total: "",
    total24hVolume: "",
    totalExchanges: undefined,
    totalMarketCap: "",
    totalMarkets: undefined,
  },
  coins: [],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case GET_COINS: {
      return {
        ...state,
        stats: action.payload.stats,
        coins: action.payload.coins,
      };
    }
    default:
      return state;
  }
}

export { initialState };
export default reducer;
