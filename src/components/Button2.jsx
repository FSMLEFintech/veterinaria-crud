import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Button2 = ({ variant = 'default', size = 'md', className, children, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-500 hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button2.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'icon']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button2;
