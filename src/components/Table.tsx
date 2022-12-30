import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { selectMatches, setUsers } from '../features/matches/matchesSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { DateAndTime } from './dateAndTime';
import { selectUsers } from '../features/users/usersSlice';
import TableCellsUser from './TableCellUser';

export default function BasicTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  console.log('users:', users);

  dispatch(setUsers(users));

  const matches = useAppSelector(selectMatches);
  // console.log('matches', matches);

  const usersNames = Object.keys(users);

  const rows = matches;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1024 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Home Team</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Away Team</TableCell>
              {usersNames.map((userName) => (
                <TableCell
                  key={userName} 
                  align="center"
                >
                  {userName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  component="th" 
                  scope="row"
                  align="center"
                >
                  <DateAndTime 
                    date={row.date}
                    time={row.time}
                    isCompleted={row.isCompleted}
                  />
                </TableCell>
                <TableCell align="center">{row.home_team.name}</TableCell>
                <TableCell align="center">{row.home_team.goals} : {row.away_team.goals}</TableCell>
                <TableCell align="center">{row.away_team.name}</TableCell>
                {usersNames.map((userName) => (
                  <TableCell
                    key={userName} 
                    align="center"
                  >
                    {users[userName][row.id] ? (
                      <TableCellsUser match={users[userName][row.id]} />
                    ) : (
                      'no prediction'
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
