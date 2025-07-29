import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = ''
}) => {
  const baseClasses = "font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#F035BE]/50";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#F035BE] to-[#F035BE]/80 hover:from-[#F035BE] hover:to-[#F035BE] text-black border-2 border-[#F035BE]",
    secondary: "bg-transparent hover:bg-[#F035BE]/10 text-[#F035BE] border-2 border-[#F035BE]"
  };
  
  const sizeClasses = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;