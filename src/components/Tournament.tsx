// import React from "react";
import { FunctionComponent } from "react";
import BasicTable from "./Table";

interface TournamentProps {
  
}
 
const Tournament: FunctionComponent<TournamentProps> = () => {
  return (
    <>
      <p>
        Tournament
      </p>
      
      <BasicTable />
    </>  
  );
}
 
export default Tournament;