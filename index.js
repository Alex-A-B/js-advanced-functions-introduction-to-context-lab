// Your code here

const createEmployeeRecord = (newEmployee) => {
    return {
        firstName: newEmployee[0],
        familyName: newEmployee[1],
        title: newEmployee[2],
        payPerHour: newEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

const createEmployeeRecords = (employees) => {
    return employees.map(person => createEmployeeRecord(person))
}

const createTimeInEvent = (employee, timeStamp) => {
    let dateTime = timeStamp.split(" ");
    let inHour = parseInt(dateTime[1], 10);
    let inDate = dateTime[0];

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: inHour,
        date: inDate
    });
    return employee
}

const createTimeOutEvent = (employee, timeStamp) => {
    let dateTime = timeStamp.split(" ");
    let outHour = parseInt(dateTime[1], 10);
    let outDate = dateTime[0];

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: outHour,
        date: outDate
    });
    return employee
}

const hoursWorkedOnDate = (employee, targetDate) => {
    let inEvent = employee.timeInEvents.find( (event) => {
        return event.date === targetDate
    });
    let outEvent = employee.timeOutEvents.find( (event) => {
        return event.date === targetDate
    });
    
    return (outEvent.hour - inEvent.hour) / 100
}; 

const wagesEarnedOnDate = (employee, targetDate) => {
    return hoursWorkedOnDate(employee, targetDate) * employee.payPerHour
};

const allWagesFor = (employee) => {
    let workedDates = employee.timeInEvents.map( (event) => {
        return event.date
    })
    let totalWagesEarned = workedDates.reduce( (tally, dates) => {
        return tally + wagesEarnedOnDate(employee, dates)
    }, 0)

        return totalWagesEarned
};

const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find( (emp) => {
        return emp.firstName === firstName
    })
};

const calculatePayroll = (arrayOfEmployees) => {
    return arrayOfEmployees.reduce( (tally, employee) => {
        return tally + allWagesFor(employee)
    }, 0)
}
