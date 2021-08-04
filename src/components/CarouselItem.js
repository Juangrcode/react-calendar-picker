import React, { useRef, useEffect } from 'react';

import '../styles/components/CarouselItem.css';

const CarouselItem = ({ children }) => {
    return <div className="carousel-item">{children}</div>;
};

export default CarouselItem;
