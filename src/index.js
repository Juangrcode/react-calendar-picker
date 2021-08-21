import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react/cjs/react.development';

import Calendar from './components/Calendar';

const App = () => {
    const [state, setState] = useState({ year: '', month: '', day: '' });
    const [stateCalendar, setStateCalendar] = useState(false);
    const handleClick = () => {
        setStateCalendar((prev) => !prev);
    };
    useEffect(() => {
        console.log({ state });
        console.log('2.Parent');
    }, []);
    useEffect(() => {
        console.log({ state });
        console.log('3.Parent');
    }, [state]);
    return (
        <Calendar setState={setState} handleClick={handleClick} stateCalendar={stateCalendar} text="Fecha de nacimiento *" error={true} />
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
