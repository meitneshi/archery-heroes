// @flow
import React from 'react';

import AthleteForm from '../athlete/AthleteForm';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

const CreatePage = () => {
  return (
    <div className="global-container">
      <Header imgSrc="static/img/logoTitle.jpg" />

      <AthleteForm athlete={{}} />

      <Footer
        developper="Maxime Bibos"
        language="React"
        copyrightYear="2017"
        githubRepo="http://github.com/meitneshi" />
    </div>
  );
};

export default CreatePage;
