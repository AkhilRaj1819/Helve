import React from 'react';
import mainImage from '../../assets/main-img (1).jpg';
import mainImage1 from '../../assets/main-img-2.jpg';

const HomeMain = () => {
  return (
    <div>
      <div clasName='relative'>
    <div className="w-full h-screen flex">
      <img
        src={mainImage}
        alt=""
        className="w-1/2 h-full object-cover"
      />
      <img
        src={mainImage1}
        alt=""
        className="w-1/2 h-full object-cover"
      />
      
    </div>
    <div className="absolute inset-0 flex flex-col items-center mt-[50vh] justify-center">
        <p className="select-none text-[#fffbeb] lg:text-[25vh] text-[12vh] font-['MonsieurLaDoulaise'] font-bold tracking-wide"
        style={{
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
  }}
        >
          Predara
        </p>
        <p className="font-['Montserrat'] font-bold text-[#fffbeb] text-[1.15rem]"
        style={{
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
              }}
        >The untamed side of luxury. </p>
        </div>
    </div>
    </div>
  );
}

export default HomeMain;
