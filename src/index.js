import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/Calendar';

const App = () => {
    const [state, setState] = useState({ year: '', month: '', day: '' });
    console.log({ state });
    return <Calendar setState={setState} state={state} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
