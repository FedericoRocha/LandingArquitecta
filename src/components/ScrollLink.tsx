import React, { useCallback } from 'react';
import type { ReactNode, MouseEvent } from 'react';

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  smooth?: boolean;
  spy?: boolean;
  exact?: boolean;
  [key: string]: any;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  children,
  className = '',
  offset = -80,
  duration = 800,
  smooth = true,
  spy = true,
  exact = true,
  ...rest
}) => {
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    // Prevenir el comportamiento por defecto del enlace
    e.preventDefault();
    
    // Obtener el elemento destino
    const targetId = to.startsWith('#') ? to.substring(1) : to;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calcular la posición de desplazamiento
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      
      // Realizar el desplazamiento suave
      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? 'smooth' : 'auto'
      });

      // Si se requiere espionaje (spy), podemos agregar lógica adicional aquí
      if (spy) {
        // Opcional: Agregar clase activa o manejar el estado de espionaje
      }
    }
  }, [to, offset, smooth, spy]);

  // Si el enlace es externo o no es un hash, usar un enlace normal
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`cursor-pointer ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
