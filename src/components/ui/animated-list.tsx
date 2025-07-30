import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100'
  },
  slideUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100'
  }
};

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  className,
  animation = 'fadeIn',
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce
  });

  const animationClass = animationClasses[animation];
  const baseClasses = 'transition-all duration-600 ease-out';

  return (
    <div ref={elementRef} className={cn(className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const delay = isVisible ? index * staggerDelay : 0;
        const stateClasses = isVisible ? animationClass.animate : animationClass.initial;

        return React.cloneElement(child, {
          ...child.props,
          className: cn(
            baseClasses,
            stateClasses,
            child.props.className
          ),
          style: {
            ...child.props.style,
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`
          }
        });
      })}
    </div>
  );
}; 