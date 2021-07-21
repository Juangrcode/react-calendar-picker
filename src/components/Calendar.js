import { useEffect, useRef } from 'react';
import years from '../../years.json';

import Carousel from './Carousel';

import '../styles/components/Calendar.css';

const Calendar = () => {
    const data = Object.values(years);
    // console.log(data);
    // const externalRef = useRef();
    // const co = useNearScreen({ externalRef, once: false });
    // useEffect(() => {
    //     console.log({ co });
    // }, []);
    return (
        <div className="calendar">
            <div className="calendar__select">
                Fecha de nacimiento *
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.99999 0.999999L6.98999 7.67456L12.98 1" stroke="#ABB1F4" strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            </div>
            <div className="calendar__picker">
                <h4>AÑO</h4>
                <h4>MES</h4>
                <h4>DÍA</h4>
                <div className="calendar__picker--items">
                    <Carousel>{data}</Carousel>
                    {/* <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.98 8.67456L6.99 2L1 8.67456" stroke="#1C24F2" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.98 8.67456L6.99 2L1 8.67456" stroke="#1C24F2" stroke-width="2" stroke-miterlimit="10" />
                    </svg> */}
                    {/* <input type="radio" name="slider-1" id="radio-1" defaultChecked /> */}
                    {/* <input type="radio" name="slider-1" id="radio-3" /> */}
                    {/*
                    {data.map((year, i) => (
                      <input key={i} type="radio" name="slider-1" id={`radio-${i}`} defaultChecked={i === 0 ? true : false} />
                      ))}
                    <PickerItem id="scrollArea" ref={externalRef}>
                        {data.map((year, i) => (
                            <Label
                                ref={externalRef}
                                key={i}
                                htmlFor={`radio-${i}`}
                                id={`card-${i}`}
                                className="card"
                                onLoad={(e) => console.log(e)}
                            >
                                {year}
                            </Label>
                        ))}
                         <label htmlFor="radio-1" id="card-1" className="card">
                            2022
                        </label>
                        <label htmlFor="radio-2" id="card-2" className="card">
                            2021
                        </label>
                        <label htmlFor="radio-3" id="card-3" className="card">
                            2020
                    </PickerItem>
                        </label>
                      */}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
