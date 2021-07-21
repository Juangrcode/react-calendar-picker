import { CalendarContainer, CalendarSelect, CalendarPicker, CalendarPickerItem, PickerItem, Label } from './style';

import years from '../../years.json';
import { useEffect, useRef } from 'react';
import useNearScreen from '../hooks/useNearScreen';

const Calendar = () => {
    // const data = Object.values(years);
    // console.log(data);
    // const externalRef = useRef();
    // const co = useNearScreen({ externalRef, once: false });
    // useEffect(() => {
    //     console.log({ co });
    // }, []);
    return (
        <CalendarContainer>
            <h2>Holaa</h2>
            {/*
            <CalendarSelect>
                Fecha de nacimiento *
                 <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.99999 0.999999L6.98999 7.67456L12.98 1" stroke="#ABB1F4" stroke-width="2" stroke-miterlimit="10" />
                    </CalendarSelect>
                    <CalendarPicker>
                    <h3>AÑO</h3>
                    <h3>MES</h3>
                    <h3>DÍA</h3>
                    <CalendarPickerItem>
                </svg> */}
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
                </CalendarPickerItem>
            </CalendarPicker>
          */}
        </CalendarContainer>
    );
};

export default Calendar;
