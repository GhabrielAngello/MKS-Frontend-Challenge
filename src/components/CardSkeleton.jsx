import React from 'react';
import './CardSkeleton.scss';

function CardSkeleton() {
  return (
    <div className="card skeleton">
      <div className="card-content">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
      </div>
      <div className="full-width-button skeleton-button"></div>
    </div>
  );
}

export default CardSkeleton;
