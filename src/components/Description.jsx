import React from 'react';

export default function Description({desc}) {
  return (
    <p className="description">
      {desc ||
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
    </p>
  );
}
