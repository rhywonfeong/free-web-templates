import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <iconify-icon icon="solar:box-linear" class="text-6xl text-neutral-700 mb-6"></iconify-icon>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        {title}
      </h1>
      <p className="text-neutral-400 max-w-md mx-auto">
        This is a placeholder page for the {title.toLowerCase()} route. The main focus of this implementation is the highly detailed home page.
      </p>
    </div>
  );
};

export default PlaceholderPage;