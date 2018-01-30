// @flow
import React from 'react';

import AthletesList from '../athlete/AthletesList';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

import { fillAthlete } from '../utils/utils';

class LandingPage extends React.Component<State, Props> {
  state = {
    athletesList: [],
  };

  componentDidMount() {
    this.fetchAthletes();
  }

  fetchAthletes = async() => {
    const athleteResponse = await fetch('http://localhost:8088/api/athletes');
    const athletes = await athleteResponse.json();
    // replace non existing portrait and cover (aka "") for default path
    athletes.forEach((athlete) => {
      fillAthlete(athlete);
    });

    this.setState({ athletesList: athletes});
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
