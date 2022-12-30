import { User } from "./User";

export type MatchFromServer = {
  id: number;
  venue: string;
  location: string;
  status: string;
  attendance: string;
  officials: any[];

  stage_name: string;
  datetime: string;
  winner: string | null;
  winner_code: string | null;
  type: string;
  home_team_country: string;
  away_team_country: string;
  home_team: {
    country: string;
    name: string;
    goals: number | null;
    penalties: number | null;
  },
  away_team: {
    country: string;
    name: string;
    goals: number | null;
    penalties: number | null;
  },
  last_checked_at: string;
  last_changed_at: string;
}

export type Match = {
  id: number;
  isCompleted: boolean;
  date: string;
  time: string;
  home_team_country: string;
  away_team_country: string;
  home_team: {
    country: string;
    name: string;
    goals: number | null;
  },
  away_team: {
    country: string;
    name: string;
    goals: number | null;
  },
  users: any;
}

export type Tournament = MatchFromServer[];
