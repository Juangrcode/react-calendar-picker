import React, { useRef, useState, useEffect, useCallback } from 'react';

import CarouselItem from './CarouselItem';

import '../styles/components/Carousel.css';

function getPrevElement(list) {
    const sibling = list[0].previousElementSibling;

    if (sibling instanceof HTMLElement) {
        return sibling;
    }

    return sibling;
}

function getNextElement(list) {
    const sibling = list[list.length - 1].nextElementSibling;

    if (sibling instanceof HTMLElement) {
        return sibling;
    }

    return null;
}

const usePosition = (ref) => {
    const [prevElement, setPrevElement] = useState(null);
    const [nextElement, setNextElement] = useState(null);

    useEffect(() => {
        const element = ref.current;

        console.log({ element });

        const update = () => {
            const rect = element.getBoundingClientRect();

            const visibleElements = Array.from(element.children).filter((child) => {
                const childRect = child.getBoundingClientRect();

                return childRect.top >= rect.top && childRect.bottom <= rect.bottom;
            });

            console.log({ visibleElements });

            // if (visibleElements.length > 0) {
            //     setPrevElement(getPrevElement(visibleElements));
            //     setNextElement(getNextElement(visibleElements));
            // }
        };

        update();

        element.addEventListener('scroll', update, { passive: true });

        return () => {
            element.removeEventListener('scroll', update, { passive: true });
        };
    }, [ref]);

    const scrollToElement = useCallback(
        (element) => {
            const currentNode = ref.current;

            if (!currentNode || !element) return;

            let newScrollPosition;

            newScrollPosition =
                element.offsetLeft + element.getBoundingClientRect().width / 2 - currentNode.getBoundingClientRect().width / 2;

            currentNode.scroll({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        },
        [ref]
    );

    // const scrollRight = React.useCallback(() => scrollToElement(nextElement), [scrollToElement, nextElement]);

    // const scrollLeft = React.useCallback(() => scrollToElement(prevElement), [scrollToElement, prevElement]);

    return {
        // hasItemsOnLeft: prevElement !== null,
        // hasItemsOnRight: nextElement !== null,
        // scrollRight,
        // scrollLeft,
    };
};

const Carousel = ({ children }) => {
    const ref = useRef();

    const data = usePosition(ref);
    console.log(data);
    return (
        <div className="carousel__container">
            <div className="carousel__container--inner" ref={ref}>
                {children.map((year) => (
                    <CarouselItem key={year}>{year}</CarouselItem>
                ))}
            </div>
        </div>
        // <CarouserContainer role="region" aria-label="Colors carousel">
        //     <CarouserContainerInner ref={ref}>
        //         {React.Children.map(children, (child, index) => (
        //             <CarouselItem key={index}>{child}</CarouselItem>
        //         ))}
        //     </CarouserContainerInner>
        //     <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft} aria-label="Previous slide">
        //         <ArrowLeft />
        //     </LeftCarouselButton>
        //     <RightCarouselButton hasItemsOnRight={hasItemsOnRight} onClick={scrollRight} aria-label="Next slide">
        //         <ArrowRight />
        //     </RightCarouselButton>
        // </CarouserContainer>
    );
};

export default Carousel;
