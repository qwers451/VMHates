import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { MAIN_ROUTE } from './utils/consts';

const AppRouter: React.FC = () => {
  const allRoutes = [...publicRoutes, ...authRoutes];

  return (
    <Routes>
      {allRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {/* Перенаправление по умолчанию */}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;