// import { Teacher, Subjects } from "./Teacher";
// import { Subjects as Subjects2 } from "./Subject";

// declare global {
// 	namespace Subjects {
// 		export interface Teacher {
// 			experienceTeachingC?: number;
// 		}
// 	}
// }

// namespace Subjects {
// 	export class Cpp extends Subjects2.Subject {
// 		getRequirements(): string {
// 			return "Here is the list of requirements for Cpp";
// 		}

// 		getAvailableTeacher(): string {
// 			return this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0
// 				? `Available Teacher: ${this.teacher.firstName}`
// 				: "No available teacher";
// 		}
// 	}
// 	export const cpp = new Cpp();
// }

namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		public getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}

		public getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingC) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}

	export const cpp = new Cpp();
	export const cTeacher: Teacher = {
		firstName: "John",
		lastName: "Doe",
		experienceTeachingC: 10,
	};
}
