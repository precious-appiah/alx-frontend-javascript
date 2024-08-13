const updateStudentGradeByCity = (students, city, newGrades) => {
  const newArr = students.filter((student) => student?.location == city);
  return newArr.map((student) => {
    const stdDetails = newGrades.filter(grade => grade.studentId == student.id);
    const grade = stdDetails[0]?.grade || 'N/A';
    return { ...student, grade };
  });
};

export default updateStudentGradeByCity;
