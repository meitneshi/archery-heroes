// @flow
import React from 'react';

import athletes from '../../data/athletes';

import AthletesList from '../athlete/AthletesList';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

const LandingPage = () => {
  return (
    <div className="global-container">
      <Header imgSrc="static/img/logoTitle.jpg" />

      <AthletesList athletes={athletes} />

      <Footer
        developper="Maxime Bibos"
        language="React"
        copyrightYear="2017"
        githubRepo="http://github.com/meitneshi" />
    </div>
  );
};

export default LandingPage;
