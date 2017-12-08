// @flow
import React from 'react';

import AthleteDetail from '../athlete/AthleteDetail';
import NotFound from './NotFound';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

import athletes from '../../data/athletes';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

const DetailPage = ({ match }: Props) => {
  const id = match.params.id;

  const athleteDetail = athletes.filter(athlete => athlete.id === id)[0];
  if (!athleteDetail) {
    return <NotFound />;
  }

  return (
    <div className="global-container">
      <Header imgSrc="static/img/logoTitle.jpg" />
      <div>
        <AthleteDetail athlete={athleteDetail} />
      </div>
      <Footer
        developper="Maxime Bibos"
        language="React"
        copyrightYear="2017"
        githubRepo="http://github.com/meitneshi" />
    </div>
  );
};

export default DetailPage;
