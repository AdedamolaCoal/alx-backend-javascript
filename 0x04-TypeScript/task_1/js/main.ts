interface Teacher {
	firstName: string;
	lastName: String;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: "John",
	fullTimeEmployee: false,
	lastName: "Doe",
	location: "London",
	contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

// interface for print teacher fn
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInstance {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInstance;
}

class StudentClass implements StudentClassInstance {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
