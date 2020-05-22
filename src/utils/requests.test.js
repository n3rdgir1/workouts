import * as faker from 'faker';
import { listChallenges, getChallenge } from './requests';

jest.useFakeTimers();

describe('requests', () => {
  describe('listChallenges', () => {
    it('should be in the correct shape', (done) => {
      listChallenges()
        .then((result) => {
          expect(result.challenges).toBeDefined();
          const challenge = faker.random.arrayElement(result.challenges);
          expect(challenge.title).toBeDefined();
          expect(challenge.days).toBeDefined();
          expect(challenge.link).toBeDefined();
          expect(challenge.id).toBeDefined();
          done();
        });
      jest.advanceTimersByTime(1000);
    });
  });

  describe('getChallenge', () => {
    const challengeId = faker.random.arrayElement([1]);
    it('should have the correct top level shape', (done) => {
      getChallenge(challengeId)
        .then((result) => {
          expect(result.challenge).toBeDefined();
          expect(result.challenge.title).toBeDefined();
          expect(result.challenge.days).toBeDefined();
          done();
        });
      jest.advanceTimersByTime(1000);
    });

    it('should have the correct days shape', (done) => {
      getChallenge(challengeId)
        .then((result) => {
          const day = faker.random.arrayElement(result.challenge.days);
          expect(day.day).toBeDefined();
          expect(day.exercises).toBeDefined();
          done();
        });
      jest.advanceTimersByTime(1000);
    });

    it('should have the correct exercise shape', (done) => {
      getChallenge(challengeId)
        .then((result) => {
          const day = faker.random.arrayElement(result.challenge.days);
          const exercise = faker.random.arrayElement(day.exercises);
          expect(exercise.name).toBeDefined();
          expect(exercise.name || exercise.reps).toBeDefined();
          done();
        });
      jest.advanceTimersByTime(1000);
    });
  });
});
