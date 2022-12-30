import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Tournament from './components/Tournament';
import { getAllMatchesAsync } from './features/matches/matchesSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMatchesAsync());
  },
  []);

  return (
    <div className="App">
      <header className="App-header">
        <Tournament />
      </header>
    </div>
  );
}

export default App;
