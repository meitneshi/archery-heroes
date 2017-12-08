// @flow
import React from 'react';

import { Link } from 'react-router-dom';

type Props = {
  athlete: Object,
};

const AthleteCard = ({ athlete }: Props) => {
  return (
    <div className="athlete-card">
      <Link to={'/athlete/' + athlete.id}>
        <div className="athlete-portrait">
          <img style={{height: '100%'}} src={'static/img/athletes/' + athlete.image} />
          <div className="medal-count">
            <img className="medal-count-image" src="static/img/medals/medal.png" />
            <div className="medal-count-number">{athlete.medals.length}</div>
          </div>
        </div>
        <div className="athlete-name">
          {athlete.name}
        </div>
      </Link>
    </div>
  );
};

export default AthleteCard;
