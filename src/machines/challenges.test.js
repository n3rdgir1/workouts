import { interpret } from 'xstate';
import { challengesMachine, LOADING, LOADED } from './challenges';

jest.useFakeTimers();
describe('Challenge Machine', () => {
  it('loads challenges', (done) => {
    let count = 0;
    interpret(challengesMachine)
      .onTransition((state) => {
        if (count === 1) {
          expect(state.value).toEqual(LOADED);
          expect(state.context.challenges.length).toBeGreaterThanOrEqual(1);
          done();
        } else {
          expect(state.value).toEqual(LOADING);
          count += 1;
        }
      })
      .start();

    jest.advanceTimersByTime(1000);
  });
});
