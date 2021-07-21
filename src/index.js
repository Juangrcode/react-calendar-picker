import React from 'react';
// import ReactDOM from 'react-dom';

// import Theme from './theme';
import Calendar from './Calendar';
// import GlobalStyle from './globalStyle';

// ReactDOM.render(
//     <React.Fragment>
//         <GlobalStyle />
//         <Theme>
//             <Calendar />
//         </Theme>
//     </React.Fragment>,
//     document.getElementById('app')
// );

const GlobalCalendar = () => (
    <React.Fragment>
        {/* <GlobalStyle /> */}
        {/* <Theme> */}

        <Calendar />

        <h2>Holaa</h2>
        {/* </Theme> */}
    </React.Fragment>
);

export default GlobalCalendar;
