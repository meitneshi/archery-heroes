// @flow
import React from 'react';

// import AthleteForm from '../athlete/athleteForm';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

const UpdatePage = () => {
  return (
    <div className="global-container">
      <Header imgSrc="static/img/logoTitle.jpg" />

      Update Page

      <Footer
        developper="Maxime Bibos"
        language="React"
        copyrightYear="2017"
        githubRepo="http://github.com/meitneshi" />
    </div>
  );
};

export default UpdatePage;
