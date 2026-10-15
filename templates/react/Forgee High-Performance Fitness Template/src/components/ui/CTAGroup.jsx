import React from 'react';
import Button from './Button';
import clsx from 'clsx';

const CTAGroup = ({ theme = 'light', className, justify = 'start' }) => {
  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end'
  }[justify];

  return (
    <div className={clsx("flex flex-col sm:flex-row items-center gap-4 mt-10", justifyClass, className)}>
      <Button 
        variant="primary" 
        iconRight 
        icon={<iconify-icon icon="solar:arrow-right-linear" width="18" />}
      >
        Agendar Visita Gratuita
      </Button>
      <Button 
        variant={theme === 'light' ? 'secondary' : 'secondaryLight'}
      >
        Falar com um Especialista
      </Button>
    </div>
  );
};

export default CTAGroup;