// import { Teacher, Subjects } from "./Teacher";

// declare global {
// 	namespace Subjects {
// 		interface Teacher {
// 			experienceTeachingJava?: number;
// 		}
// 	}
// }

// namespace Subjects {
// 	export class Java {
// 		constructor(private teacher: Teacher) {}

// 		getRequirements(): string {
// 			return "Here is the list of requirements for Java";
// 		}

// 		getAvailableTeacher(): string {
// 			return this.teacher.experienceTeachingJava
// 				? `Available Teacher: ${this.teacher.firstName}`
// 				: "No available teacher";
// 		}
// 	}
// 	export const java = new Java({ firstName: "", lastName: "" });
// }

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		public getRequirements(): string {
			return "Here is the list of requirements for Java";
		}

		public getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingJava) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}

	export const java = new Java();
}
