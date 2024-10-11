import React from 'react';

export const Select = ({ children }) => (
  <div className="select-container">
    {children}
  </div>
);

export const SelectTrigger = ({ children, className, ...props }) => (
  <div className={`select-trigger ${className}`} {...props}>
    {children}
  </div>
);

export const SelectValue = ({ placeholder }) => (
  <span>{placeholder}</span>
);

export const SelectContent = ({ children }) => (
  <div className="select-content">
    {children}
  </div>
);

export const SelectItem = ({ value, children, ...props }) => (
  <div className="select-item" data-value={value} {...props}>
    {children}
  </div>
);
