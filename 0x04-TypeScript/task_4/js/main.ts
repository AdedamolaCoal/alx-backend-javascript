// import { cpp } from "./subjects/Cpp";
// import { java } from "./subjects/Java";
// import { react } from "./subjects/React";
// import { cTeacher } from "./subjects/Teacher";

// console.log("C++");
// cpp.teacher = cTeacher;
// console.log(cpp.getRequirements());
// console.log(cpp.getAvailableTeacher());

// console.log("Java");
// java.teacher = cTeacher;
// console.log(java.getRequirements());
// console.log(java.getAvailableTeacher());

// console.log("React");
// react.teacher = cTeacher;
// console.log(react.getRequirements());
// console.log(react.getAvailableTeacher());

import { cpp, java, react, cTeacher } from "./subjects";

// For Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
