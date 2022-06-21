// eslint-disable-next-line max-len
const getStudentIdsSum = (students) => students.reduce((prevStudent, curStudent) => prevStudent + curStudent.id, 0);

export default getStudentIdsSum;
