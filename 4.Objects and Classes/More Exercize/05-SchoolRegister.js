function printSchoolRegister(input){
    const graduatedStudents={};
    for (const entry of input) {
        const [curStudent, curGrade, currScore]=entry.split(', ');
        const name = curStudent.split(': ')[1];
        const grade = Number(curGrade.split(': ')[1]);
        const score = Number(currScore.split(': ')[1]);
        if (score >= 3) {
            graduatedStudents[name] = {
                grade,
                score
            }
        }
    }
    const  sortedByGrade = Object.entries(graduatedStudents)
                                .sort((a,b) => a[1].grade-b[1].grade);
    const groupOfGrade = {};
    for (const [key, values] of sortedByGrade) {
        //console.log(`${key} => ${values.grade} => ${values.score}`);
        const nextGrade = values.grade+1;
        if(!groupOfGrade.hasOwnProperty(nextGrade)){
            groupOfGrade[nextGrade]={
                names: [],
                totalScore: 0,
                count: 0
            }
        }
        groupOfGrade[nextGrade].names.push(key);
        groupOfGrade[nextGrade].totalScore += values.score;
        groupOfGrade[nextGrade].count += 1;
    }
    const result = Object.entries(groupOfGrade);
    for (const [key,values] of result) {
        console.log(`${key} Grade`);
        console.log(`List of students: ${values.names.join(', ')}`);
        const avgScore = values.totalScore / values.count;
        const avgResult = avgScore.toFixed(2); 
        console.log(`Average annual score from last year: ${avgResult}`);
        console.log(' ');
    }
}

printSchoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    );

//printSchoolRegister([
//    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//]
//);