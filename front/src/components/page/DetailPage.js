// @flow
import React from 'react';

import AthleteDetail from '../athlete/AthleteDetail';
import NotFound from './NotFound';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

class DetailPage extends React.Component {
  state = {
    athleteDetail: {
      'id': '',
      'name': '',
      'country': 'fr',
      'birth': 0,
      'image': '',
      'cover': '',
      'link': '',
      'medals': [{ id: 0, year: 0, type: 'G', event: 'Default' }],
    },
  };

  componentDidMount() {
    this.fetchAthlete();
  }

  fetchAthlete = async() => {
    const athleteResponse = await fetch('http://localhost:8088/api/athletes/' + this.props.match.params.id);
    const athlete = await athleteResponse.json();

    const countryResponse = await fetch('http://localhost:8088/api/country/' + athlete.country);
    const country = await countryResponse.json();
    this.setState({ athleteDetail: athlete });
    this.setState({ country});
  }

  render() {
    return (
      <div className="global-container">
        <Header imgSrc="static/img/logoTitle.jpg" />
        <div>
          <AthleteDetail athlete={this.state.athleteDetail} country={this.state.country} />
        </div>
        <Footer
          developper="Maxime Bibos"
          language="React"
          copyrightYear="2017"
          githubRepo="http://github.com/meitneshi" />
      </div>
    );
  }
}

export default DetailPage;
