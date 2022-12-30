export type UserMatch = {
  matchId: number;
  homeTeam: string;
  homeTeamGoals: number;
  awayTeam: string;
  awayTeamGoals: number;
  doubleBonus: boolean;
  score: number;
}

export type UserData = {
  [matchId: number]: UserMatch;
}

export type User = {
  [name: string]: UserData;
}

export type Users = {[name: string]: UserData};

// const user1: User = {
//   'John': {
//     1: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//     2: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//   }
// };

// const user2: User = {
//   'Max': {
//     1: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//     2: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//   },
// };

// const party: Users = {
//   'John': {
//     1: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//     2: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//   },
//   'Max': {
//     1: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//     2: {
//       matchId: 2,
//       homeTeam: 'string',
//       homeTeamGoals: 2,
//       awayTeam: 'string',
//       awayTeamGoals: 3,
//       doubleBonus: true,
//       score: 4,
//     },
//   },
// }
