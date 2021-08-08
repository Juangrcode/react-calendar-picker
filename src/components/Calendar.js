import React, { useEffect, useState } from 'react';

import years from '../data/years.json';
import months from '../data/months.json';
import days from '../data/days.json';

import Carousel from './Carousel';
import ArrowButton from './ArrowButton';
import stringToDate from '../utils/stringToDate';

import '../styles/components/Calendar.css';
import '../styles/global.css';
import { useCallback } from 'react';

const Calendar = ({ state, setState, arrYears, arrMonths, arrDays, state }) => {
    const dataYears = arrYears || Object.values(years);
    const dataMonths = arrMonths || Object.values(months);
    const dataDays = arrDays || Object.values(days);

    const [stateCalendar, setStateCalendar] = useState(false);

    const [stateYear, setStateYear] = useState(1);
    const [stateMonth, setStateMonth] = useState(1);
    const [stateDay, setStateDay] = useState(1);

    const [stateDataYear, setStateDataYear] = useState(dataYears[1]);
    const [stateDataMonth, setStateDataMonth] = useState(1);
    const [stateDataDay, setStateDataDay] = useState(1);

    const nextYear = () => {
        setStateYear((year) => year + 1);
    };

    const previousYear = () => {
        setStateYear((year) => year - 1);
    };

    const nextMonth = () => {
        setStateMonth((month) => month + 1);
    };

    const previousMonth = () => {
        setStateMonth((month) => month - 1);
    };

    const nextDay = () => {
        setStateDay((day) => day + 1);
    };

    const previousDay = () => {
        setStateDay((day) => day - 1);
    };

    const handleClick = () => {
        setStateCalendar((prev) => !prev);
    };

    useEffect(() => {
        const date = stringToDate({
            year: stateDataYear,
            month: stateDataMonth,
            day: stateDataDay,
        });
        if (stateDataYear !== dataYears[1]) setState(date);
    }, [stateDataYear, stateDataMonth, stateDataDay, state]);

    return (
        <div className="calendar">
            <div className="calendar__container">
                <button
                    type="button"
                    className={`calendar__select ${stateDataYear !== 1 && 'calendar__select--focus'}`}
                    onClick={handleClick}
                >
                    {stringToDate({
                        year: stateDataYear,
                        month: stateDataMonth,
                        day: stateDataDay,
                    })}
                    <svg width="11" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.99999 0.999999L6.98999 7.67456L12.98 1" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" />
                    </svg>
                </button>
                {stateCalendar && (
                    <div className="calendar__picker">
                        <h4>AÑO</h4>
                        <h4>MES</h4>
                        <h4>DÍA</h4>
                        <div className="calendar__picker--items">
                            <ArrowButton onClick={previousYear} disabled={stateYear === 1} />
                            <Carousel state={stateYear} setStateData={setStateDataYear}>
                                {dataYears}
                            </Carousel>
                            <ArrowButton onClick={nextYear} isDown={true} disabled={dataYears.length - 2 === stateYear} />
                        </div>
                        <div className="calendar__picker--items">
                            <ArrowButton onClick={previousMonth} disabled={stateMonth === 1} />
                            <Carousel state={stateMonth} setStateData={setStateDataMonth} isMonth={true}>
                                {dataMonths}
                            </Carousel>
                            <ArrowButton onClick={nextMonth} isDown={true} disabled={dataMonths.length - 2 === stateMonth} />
                        </div>
                        <div className="calendar__picker--items">
                            <ArrowButton onClick={previousDay} disabled={stateDay === 1} />
                            <Carousel state={stateDay} setStateData={setStateDataDay}>
                                {dataDays}
                            </Carousel>
                            <ArrowButton onClick={nextDay} isDown={true} disabled={dataDays.length - 2 === stateDay} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;
