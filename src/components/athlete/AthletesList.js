// @flow
import React from 'react';

import AthleteCard from './AthleteCard';

type Props = {
  athletes: Array<Object>,
};

const AthletesList = ({ athletes }: Props) => {
  return (
    <div className="athlete-list">
      {athletes.map(
        (athlete) => {
          return <AthleteCard key={athlete.id} athlete={athlete} />;
        },
      )}
    </div>
  );
};

export default AthletesList;
