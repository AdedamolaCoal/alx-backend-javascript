export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    console.log("student: ", student);
    if (student.location === city) {
      console.log("conditioned student: ", student);
      return {
        ...student,
        grades: [...student.grade, ...newGrades],
      };
    }
    return student;
  });
}
