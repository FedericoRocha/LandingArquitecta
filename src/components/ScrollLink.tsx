import React from 'react';
import type { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  smooth?: boolean | string;
  spy?: boolean;
  exact?: boolean;
  [key: string]: any;
}

const SmoothScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  children,
  className = '',
  offset = -80, // Ajusta este valor según la altura de tu navbar
  duration = 800,
  smooth = true,
  spy = true,
  exact = true,
  ...rest
}) => {
  return (
    <ScrollLink
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      className={`cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollLink;
