import createEmployeesObject from "./11-createEmployeesObject";
import createReportObject from "./12-createReportObject";

const employees = {
    ...createEmployeesObject("Software", [ "Bob", "Sylvie" ]),
    ...createEmployeesObject("Marketing", [ "Sara", "Sonia", "Samuel" ])
};

const report = createReportObject(employees);

console.log(report);
