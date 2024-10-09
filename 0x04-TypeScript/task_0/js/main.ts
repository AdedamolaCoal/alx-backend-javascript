interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
	location: "Abuja",
};
const student2: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 23,
	location: "Lagos",
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLElement = document.body;
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

body.appendChild(table);
table.appendChild(tbody);

studentsList.forEach((student: Student) => {
	const row: HTMLTableRowElement = document.createElement("tr");

	const firstNameCell: HTMLTableCellElement = document.createElement("td");
	const locationCell: HTMLTableCellElement = document.createElement("td");

	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	tbody.appendChild(row);
});

// const table = document.createElement("table");
// const tbody = document.createElement("tbody");

// const headerRow = document.createElement("tr");
// const nameHeader = document.createElement("th");
// nameHeader.textContent = "First Name";
// const locationHeader = document.createElement("th");
// locationHeader.textContent = "Location";

// studentsList.forEach((student) => {
// 	const row = document.createElement("tr");
// 	const nameCell = document.createElement("td");
// 	nameCell.textContent = student.firstName;
// 	const locationCell = document.createElement("td");
// 	locationCell.textContent = student.location;
// 	row.appendChild(nameCell);
// 	row.appendChild(locationCell);
// 	tbody.appendChild(row);
// });
