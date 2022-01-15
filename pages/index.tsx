import React from 'react';
import { NextPage } from 'next';
import HouseList from '@components/house-list/house-list';
import HouseData from '@mocks/houses-data.json';

const Index: NextPage = () => {
  return (
    <div>
      <HouseList houseData={HouseData} />
    </div>
  );
};

export default Index;
