import React from 'react';

import '../styles/components/Carousel.css';

const Carousel = ({ children, state, setStateData }) => (
    <div className="carousel__container">
        <div className="carousel__container--inner">
            {children.map((date, i) => {
                if (state === i) {
                    setStateData(date);
                    console.log(date);
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
