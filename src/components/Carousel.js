import React from 'react';

import '../styles/components/Carousel.css';

const Carousel = ({ children, state, setStateData, isMonth = false }) => (
    <div className="carousel__container">
        <div className="carousel__container--inner">
            {children.map((date, i) => {
                if (state === i) {
                    if (!isMonth) {
                        setStateData(date);
                    } else {
                        setStateData(i);
                    }
                }
                return (
                    (state === i || state + 1 === i || state - 1 === i) && (
                        <div key={date} className={`carousel-item ${(state + 1 === i || state - 1 === i) && 'small-letter'}`}>
                            {date}
                        </div>
                    )
                );
            })}
        </div>
    </div>
);

export default Carousel;
