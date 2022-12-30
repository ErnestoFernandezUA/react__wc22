import { MatchFromServer } from "../type/Match";
import { client } from "../utils/axiosClient";

export const getMatches = () => {
  return client.get<MatchFromServer[]>('/matches');
};