// @flow
import React from 'react';

import AthletesList from '../athlete/AthletesList';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

class LandingPage extends React.Component {
  state = {
    athletesList: [],
  };

  componentDidMount() {
    this.fetchAthletes();
  }

  fetchAthletes = async() => {
    const response = await fetch('http://localhost:8088/api/athletes');
    const body = await response.json();
    this.setState({ athletesList: body});
  }

  render() {
    return (
      <div className="global-container">
        <Header imgSrc="static/img/logoTitle.jpg" />

        <AthletesList athletes={this.state.athletesList} />

        <Footer
          developper="Maxime Bibos"
          language="React"
          copyrightYear="2017"
          githubRepo="http://github.com/meitneshi" />
      </div>
    );
  }
}

export default LandingPage;
