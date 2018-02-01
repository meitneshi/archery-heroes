// @flow
import React from 'react';
import Select from 'react-select';
import _findLast from 'lodash.findlast';

import MedalDetail from './MedalDetail';

type Props = {
  athlete: Object,
};

class AthleteForm extends React.Component<State, Props> {
    state = {
      athlete: {
        name: '',
        birth: '',
        link: '',
        country: 'fr',
        medals: [],
      },
      countries: [],
      medalToAdd: {
        id: '',
        type: '',
        year: '',
        event: '',
      },
    };

    handleSubmit: Function;
    handleMedalAddition: Function;
    handleAddMedal: Function;

    constructor(props: Props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleMedalAddition = this.handleMedalAddition.bind(this);
      this.handleAddMedal = this.handleAddMedal.bind(this);
    }

    componentDidMount() {
      this.fetchCountries();
    }

  fetchCountries = async() => {
    const countriesResponse = await fetch('http://localhost:8088/api/countries/');
    const countriesDB = await countriesResponse.json();
    const countries = [];
    countriesDB.forEach((countryDB) => {
      countries.push({
        value: countryDB.code,
        label: countryDB.label,
      });
    });
    this.setState({ countries });
  }

  handleInputChange(newPartialAthlete: Object) {
    this.setState(state => ({
      ...state,
      athlete: {
        ...state.athlete,
        ...newPartialAthlete,
      },
    }));
  }

  handleMedalAddition(newPartialMedal: Object) {
    this.setState(state => ({
      ...state,
      medalToAdd: {
        ...state.medalToAdd,
        ...newPartialMedal,
      },
    }));
  }

  handleAddMedal() {
    const { medalToAdd, athlete } = this.state;
    if (medalToAdd.type === '' || medalToAdd.year === '' || medalToAdd.event === '') {
      // TODO : handle error
      console.log('error in form !!');
    } else {
      // compute the id of the medal (last id + 1)
      const lastMedal = _findLast(athlete.medals);
      if (!lastMedal) {
        medalToAdd.id = 1;
      } else {
        medalToAdd.id = lastMedal.id + 1;
      }
      athlete.medals.push(medalToAdd);
      this.handleInputChange({ medals: athlete.medals});
      this.setState({medalToAdd: {id: '', type: '', year: '', event: ''}});

      console.log(this.state);
    }
  }

  deleteMedal(medal: Object) {
    const { athlete } = this.state;
    for (let i = 0; i < athlete.medals.length; i += 1) {
      if (athlete.medals[i].id === medal.id) {
        athlete.medals.splice(i, 1);
      }
    }
    this.setState({ athlete });
  }

  handleSubmit(event: Event) {
    console.log('submit', this.state);
    event.preventDefault();
  }

  render() {
    const { athlete, countries, medalToAdd } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-line">
            <label>Name: </label>
            <input type="text" placeholder="Athlete Name..." required value={athlete.name} onChange={e => this.handleInputChange({ name: e.target.value })} />
          </div>

          <div className="form-line">
            <label>Birth Date: </label>
            <input required placeholder="Athlete Birth Year..." type="number" value={athlete.birth} onChange={e => this.handleInputChange({ birth: e.target.value })} />
          </div>

          <div className="form-line">
            <label>Bio Link: </label>
            <input required placeholder="Athlete Bio Link..."type="text" value={athlete.link} onChange={e => this.handleInputChange({ link: e.target.value })} />
          </div>

          <div className="form-line">
            <label>Origin Country: </label>
            <Select
              className="form-select"
              clearable={false}
              value={athlete.country}
              onChange={e => this.handleInputChange({ country: e.value })}
              options={countries} />
          </div>

          <div className="form-line">
            <label>Palmares</label>
            {athlete.medals.map(
              (medal) => {
                return <MedalDetail key={medal.id} title={medal} canDelete deleteMedal={() => this.deleteMedal(medal)} />;
              },
            )}
          </div>

          <div className="form-line">
            <label>Add Medal to Palmares</label>
            <Select
              className="form-select"
              clearable={false}
              value={medalToAdd.type}
              onChange={e => this.handleMedalAddition({ type: e.value })}
              options={[{value: 'G', label: 'Gold'}, {value: 'S', label: 'Silver'}, {value: 'B', label: 'Bronze'}]} />
            <input placeholder="Medal Year..."type="number" value={medalToAdd.year} onChange={e => this.handleMedalAddition({ year: e.target.value })} />
            <input placeholder="Event Name..."type="text" value={medalToAdd.event} onChange={e => this.handleMedalAddition({ event: e.target.value })} />

            <input type="button" value="add Medal To Palmares" onClick={this.handleAddMedal} />
          </div>

          <input className="submit-button" type="submit" value="Add Athlete" />
        </form>
      </div>
    );
  }
}

export default AthleteForm;
