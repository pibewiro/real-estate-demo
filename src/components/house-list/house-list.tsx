import React from 'react';
import { HouseTypes } from '@services/houses.types';
import { timeFormatter } from '@utils/timeFormatter';
import { phoneNumberFormatter } from '@utils/phoneNumberFormatter';

interface HouseListInterface {
  houseData?: HouseTypes[];
}

const HouseList: React.FC<HouseListInterface> = props => {
  const { houseData } = props;

  return (
    <div className="house-list">
      {houseData &&
        houseData.map(x => (
          <div key={x.id} className="house-list__card">
            <p>
              Location: {x.house?.address?.city}, {x.house?.address?.stateAbbv}
            </p>
            <p>
              Owner: {x.owner?.firstName} {x.owner?.lastName}
            </p>
            <p>
              Phone Number:{' '}
              {x.owner?.phoneNumber &&
                phoneNumberFormatter(x.owner?.phoneNumber)}
            </p>
            <p>Date Added: {x.dateCreated && timeFormatter(x.dateCreated)}</p>
          </div>
        ))}
    </div>
  );
};

export default HouseList;
