const getStudentIdsSum = (students) => {
  students.map((item) => item.id).reduce((acc, curr) => acc + curr, 0);
};

export default getStudentIdsSum;
