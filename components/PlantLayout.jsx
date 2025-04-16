import React from 'react';
import PlantHeader from './PlantHeader';
import { Outlet } from 'react-router-dom';

const PlantLayout = () => {
  return (
    <>
      <PlantHeader />
      <Outlet />
    </>
  );
};

export default PlantLayout;
