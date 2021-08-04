const stringToDate = ({ year, month, day }) => {
    let newMonth = month;
    let newDay = day;

    if (newMonth <= 9) {
        newMonth = `0${newMonth}`;
    }
    if (newDay <= 9) {
        newDay = `0${newDay}`;
    }

    return `${year}/${newMonth}/${newDay}`;
};

export default stringToDate;
