// import { Teacher, Subjects } from "./Teacher";

// declare global {
// 	namespace Subjects {
// 		interface Teacher {
// 			experienceTeachingReact?: number;
// 		}
// 	}
// }

// namespace Subjects {
// 	export class React {
// 		constructor(private teacher: Teacher) {}

// 		getRequirements(): string {
// 			return "Here is the list of requirements for React";
// 		}

// 		getAvailableTeacher(): string {
// 			return this.teacher.experienceTeachingReact
// 				? `Available Teacher: ${this.teacher.firstName}`
// 				: "No available teacher";
// 		}
// 	}

// 	export const react = new React({ firstName: "", lastName: "" });
// }

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		public getRequirements(): string {
			return "Here is the list of requirements for React";
		}

		public getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingReact) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}

	export const react = new React();
}
