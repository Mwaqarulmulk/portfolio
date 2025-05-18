import React from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700',
    secondary: 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800',
    ghost: 'bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-5',
  };

  const iconSpacing = {
    left: icon ? 'mr-2' : '',
    right: icon ? 'ml-2' : '',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={iconSpacing.left}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconSpacing.right}>{icon}</span>}
    </motion.button>
  );
};

export default Button;