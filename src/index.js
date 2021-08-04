import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/Calendar';
import './styles/global.css';
import ThemeContext from './context/ThemeContext';

// const App = () => {
//     const [state, setState] = useState({ year: '', month: '', day: '' });
//     console.log({ state });
//     return <Calendar setState={setState} />;
// };

// ReactDOM.render(
//     <ThemeContext.Provider>
//         <App />
//     </ThemeContext.Provider>,
//     document.getElementById('app')
// );

// const CalendarPicker = () => (
//     <>
//
//     </>
// );

export default Calendar;
