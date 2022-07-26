// 1: найти Ритейк студентов
// 2: исключить из массива тех, кто на пересдачу



// option 1
// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const passedStudents = allStudentsList.filter(name => studentsForRetake.indexOf(name) !== -1);
//   return studentsForRetake;
// };

// option 2
// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const passedStudents = allStudentsList.filter(name => !(studentsForRetake.includes(name)));

//   const nessages = passedStudents.map(name => `Good job ${name}`);

//   return nessages;
// };

// option 3

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList.filter(name => !studentsForRetake.includes(name)).map(name => `Good job ${name}`);

//input:
const allStud = ['Alan', 'Benny', 'Cail', 'Jackob'];
const retakeStud = ['Benny', 'Jackob'];

getMessagesForBestStudents(allStud, retakeStud);

console.log(getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']
