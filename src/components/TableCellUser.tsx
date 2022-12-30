import { FunctionComponent } from "react";
import { UserMatch } from "../type/User";

interface TableCellsUserProps {
  match: UserMatch;
}
 
const TableCellsUser: FunctionComponent<TableCellsUserProps> = ({ match }) => {
  const { 
    homeTeamGoals,
    awayTeamGoals,
    doubleBonus,
    score,
    } = match;

  return ( 
    <>
      <p>{homeTeamGoals} : {awayTeamGoals}</p>
      <p>{score} Pts</p>
      {doubleBonus ? ('double') : ('')}
    </>
  );
}
 
export default TableCellsUser;