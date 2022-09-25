import { GET_COINS } from "./constant";

export const getCoins = (payload:any) => ({
  type: GET_COINS,
  payload
})