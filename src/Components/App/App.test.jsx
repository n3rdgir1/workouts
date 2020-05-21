import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';

jest.mock('../Challenge/Challenge');
jest.useFakeTimers();

describe('App', () => {
  describe('while data is loading', () => {
    it('reanders Loading', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('loading')).toBeInTheDocument();
    });
  });

  describe('when no challenge is selected', () => {
    let getByTestId;
    beforeEach(() => {
      ({ getByTestId } = render(<App />));
      act(() => jest.advanceTimersByTime(1000));
    });

    it('renders challenge list', () => {
      // eslint-disable-next-line global-require
      const { challenges } = require('../../utils/api/index.json');
      challenges.forEach(({
        title, days, link, id,
      }) => {
        const challenge = getByTestId(title);
        expect(challenge).toHaveAttribute('title', title);
        expect(challenge).toHaveAttribute('days', days.toString());
        expect(challenge).toHaveAttribute('link', link);
        expect(challenge).toHaveAttribute('id', id.toString());
      });
    });
  });
});
