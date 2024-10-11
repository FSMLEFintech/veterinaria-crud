import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={`card-header mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">
    {children}
  </h3>
);

export const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);
