import React from 'react';
import { useLocation } from 'react-router-dom';

const Admin = () => {
  const location = useLocation();
  return (
    <div>
      Admin
      -
      {location.pathname}
    </div>
  );
};

export default Admin;
