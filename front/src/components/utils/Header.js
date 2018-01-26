// @flow
import React from 'react';

type Props = {
  imgSrc: string,
};

const Header = ({ imgSrc }: Props) => {
  return (
    <img className="title-img" src={imgSrc} />
  );
};

export default Header;
