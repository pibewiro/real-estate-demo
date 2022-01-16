import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <div className="home">
      <div className="home__image">
        <Image src="/assets/home-image.jpg" alt="Home Image" layout="fill" />
      </div>
      <div className="home__form"></div>
    </div>
  );
};

export default index;
