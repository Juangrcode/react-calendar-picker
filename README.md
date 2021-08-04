# react-calendar-picker

Whenever I start a new project, I don't know what to write for the first commit. After doing a “git init” there is technically nothing there...

## Install

```
npm install -S react-calendar-picker
```

# Usage

```
import React, { useState } from 'react'
import Calendar from 'react-calendar-picker'

const App = () =>{
  const [stateCalendar,setStateCalendar] = useState({
    year: '',
    month: '',
    day: '',
  })

  return(
    <Calendar setState={setStateCalendar} />
  )
}
```

# License

random-msg is released under the [MIT License](https://opensource.org/licenses/MIT).
