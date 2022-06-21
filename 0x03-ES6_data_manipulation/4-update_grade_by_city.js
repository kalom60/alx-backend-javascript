// eslint-disable-next-line max-len
const updateStudentGradeByCity = (students, city, newGrades) => students.filter((student) => student.location === city).map((stu) => ({
  ...stu,
  grade: newGrades.filter((grade) => grade.studentId === stu.id).map((grade) => grade.grade).pop() || 'N/A',
}));

export default updateStudentGradeByCity;
