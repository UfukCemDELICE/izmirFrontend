import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DepremBagis from "../pages/DepremBagis"
import MainPage from '../pages/MainPage';
import ElbiseBagis from '../pages/ElbiseBagis';
import GidaBagis from '../pages/GidaBagis';
import NakitBagis from '../pages/NakitBagis';
import EsyaBagis from '../pages/EsyaBagis';


export const Dashboard = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="deprem-bagis" element={<DepremBagis/>} />
      <Route path="elbise-bagis" element={<ElbiseBagis/>} />
      <Route path="gida-bagis" element={<GidaBagis/>} />
      <Route path="nakit-bagis" element={<NakitBagis/>} />
      <Route path="esya-bagis" element={<EsyaBagis/>} />
    </Routes>
  </div>
  );
}
