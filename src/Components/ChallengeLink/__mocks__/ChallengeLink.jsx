/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default ({
  title, days, link, id, onClick,
}) => (
  <>
    <mock-challenge title={title} days={days} link={link} id={id} data-testid={title} />
    <button data-testid={`${title}-onClick`} type="button" onClick={onClick} />
  </>
);
