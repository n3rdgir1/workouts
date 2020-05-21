import { Machine, assign } from 'xstate';
import { listChallenges } from '../utils/requests';

export const LOADING = 'loading';
export const LOADED = 'loaded';
export const ERROR = 'error';
const DONE = 'done';

export const challengesMachine = Machine(
  {
    id: 'challengesMachine',
    initial: LOADING,
    context: {},
    states: {
      [LOADING]: {
        invoke: {
          id: 'loadChallenges',
          src: listChallenges,
          onDone: {
            target: LOADED,
            actions: assign({ challenges: (_, event) => event.data.challenges }),
          },
          onError: {
            target: ERROR,
          },
        },
        on: {
          [DONE]: LOADED,
        },
      },
      [LOADED]: {},
      [ERROR]: {},
    },
  },
);
