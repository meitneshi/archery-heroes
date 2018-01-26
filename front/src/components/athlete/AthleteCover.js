// @flow
import React from 'react';

type Props = {
  athlete: Object,
};

const AthleteCover = ({ athlete }: Props) => {
  return (
    <div className="athlete-cover-container">
      <div className="athlete-cover">
        <img style={{width: '100%', height: 'auto'}} src={'static/img/athletes/' + athlete.cover} />
      </div>
      <div className="athlete-profile">
        <div className="athlete-profile-img">
          <img style={{width: '150px'}} src={'static/img/athletes/' + athlete.image} />
        </div>
        <div className="athlete-profile-name">
          {athlete.name}
        </div>
      </div>
    </div>
  );
};

export default AthleteCover;
