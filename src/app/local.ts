const initialUser = {
  'Max': {
    1: {
      matchId: 2,
      homeTeam: 'string',
      homeTeamGoals: 2,
      awayTeam: 'string',
      awayTeamGoals: 3,
      doubleBonus: true,
      score: 6,
    },
    2: {
      matchId: 2,
      homeTeam: 'string',
      homeTeamGoals: 2,
      awayTeam: 'string',
      awayTeamGoals: 3,
      doubleBonus: false,
      score: 16,
    },
  }
};

const initialUsersData = { ...initialUser };

 const localUsersData = JSON.parse(`${localStorage.getItem('localUsersData')}`);

if (!localUsersData) {
  localStorage.setItem('localUsersData', JSON.stringify(initialUsersData));
}

// console.log('localUsersData', localUsersData);

export default localUsersData;