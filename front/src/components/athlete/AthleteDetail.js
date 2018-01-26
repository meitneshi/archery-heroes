// @flow
import React from 'react';

import AthleteCover from './AthleteCover';
import Palmares from './Palmares';

type Props = {
  athlete: Object,
  athleteCountry: string,
};

const AthleteDetail = ({ athlete, athleteCountry }: Props) => {
  return (
    <div>
      <div className="athlete-detail">
        <AthleteCover athlete={athlete} />
        <div className="atlete-summary">
          Athlete coming from {athleteCountry} born in {athlete.birth}. More informations on <a href={athlete.link} target="_blank">french wikipedia</a>
        </div>
        <Palmares athlete={athlete} />
      </div>
      <div className="back-link">
        <a href="/">- Back to list -</a>
      </div>
    </div>
  );
};

export default AthleteDetail;
