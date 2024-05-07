import React from 'react';
import { featuredTours } from '../data';
import Title from './Title';
import Tour from './Tour';

const FeaturedTours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />

        <div className="section-center featured-center">
          {featuredTours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default FeaturedTours;