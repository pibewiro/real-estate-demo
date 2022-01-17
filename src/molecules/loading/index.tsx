import Image from 'next/image';
import React from 'react';

interface ILoading {
  visible: boolean;
}
const Loading: React.FC<ILoading> = props => {
  return (
    <>
      {props.visible && (
        <div className="loading">
          <div className="loading__inner">
            <Image
              src={process.env.NEXT_PUBLIC_LOGO as string}
              alt="Home Image"
              layout="fill"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
