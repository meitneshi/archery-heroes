// @flow
import React from 'react';

type Props = {
  title: Object,
  canDelete: boolean,
  deleteMedal: func,
};

const typeMap = {
  'G': 'gold',
  'S': 'silver',
  'B': 'bronze',
};

const MedalDetail = ({ title, canDelete, deleteMedal }: Props) => {
  return (
    <div className="medal-detail">
      <span className="title-component">
        <img style={{height: 25}} src={'static/img/medals/' + typeMap[title.type] + '.png'} />
      </span>
      <span className="title-component">
        {title.year}
      </span>
      <span className="title-component">
        {title.event}
      </span>
      {canDelete && <input type="button" onClick={deleteMedal} value="X" />}
    </div>
  );
};

export default MedalDetail;
