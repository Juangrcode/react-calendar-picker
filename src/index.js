import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/Calendar';
import './styles/global.css';

ReactDOM.render(
    <React.Fragment>
        <Calendar />
    </React.Fragment>,
    document.getElementById('app')
);

// const CalendarPicker = () => (
//     <React.Fragment>
//         <Calendar />
//     </React.Fragment>
// );

// export default CalendarPicker;
