/* eslint-disable global-require */

const request = (file) => new Promise((resolve) => {
  // eslint-disable-next-line import/no-dynamic-require
  const json = require(`./api/${file}.json`);
  setTimeout(() => {
    resolve(json);
  }, Math.random() * 1000);
});

export const listChallenges = () => request('index');

export const getChallenge = (id) => request(id);
