// @flow
import React from 'react';

type Props = {
  title: Object,
};

const typeMap = {
  'G': 'gold',
  'S': 'silver',
  'B': 'bronze',
};

const MedalDetail = ({ title }: Props) => {
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
    </div>
  );
};

export default MedalDetail;
