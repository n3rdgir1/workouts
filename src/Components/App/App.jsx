import React from 'react';
import { useMachine } from '@xstate/react';
import './App.css';
import { challengesMachine, LOADING, LOADED } from '../../machines/challenges';
import Challenge from '../Challenge/Challenge';

const App = () => {
  const [state, send] = useMachine(challengesMachine);
  const { context, value } = state;
  const { challenges } = context;

  return (
    <>
      <header>
        <h1>Challenges</h1>
      </header>
      { value === LOADING
      && <div data-testid="loading">Loading...</div>}
      {value === LOADED
      && challenges.map(({
        title, days, link, id,
      }) => <Challenge title={title} days={days} link={link} id={id} />)}
    </>
  );
};

export default App;
