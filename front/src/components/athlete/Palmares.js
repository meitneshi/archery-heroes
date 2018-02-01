// @flow
import React from 'react';
import _findLast from 'lodash.findlast';

import MedalDetail from './MedalDetail';

type Props = {
  athlete: Object,
};

const Palmares = ({ athlete }: Props) => {
  const athleteMedals = athlete.medals;
  const sortedAthleteMedals = athleteMedals.sort((a, b) => {
    return a.year - b.year;
  });

  return (
    <div className="palmares-container">
      <div className="individual-medal">
        This athlete has won <span className="strong">{athleteMedals.length}</span> medals in individual competitions between {sortedAthleteMedals[0].year} and {_findLast(sortedAthleteMedals).year}.
      </div>
      <div className="medal-list">
        {sortedAthleteMedals.map((athleteMedal) => {
          return <MedalDetail key={athleteMedal.id} title={athleteMedal} canDelete={false} />;
        })}
      </div>
    </div>
  );
};

export default Palmares;
