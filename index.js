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