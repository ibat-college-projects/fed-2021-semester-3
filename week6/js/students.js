function init() {
    console.log("studnet code has started")
    WriteStudentResults(GetStudentResults());
}

function GetStudentResults() {

    return [
        {
            name: "Bruce Wayne", exams: [
                { title: 'English', score: 80 },
                { title: 'English', score: 80 },
                { title: 'English', score: 80 }
            ]
        },
        {
            name: "Tony Stark", exams: [
                { title: 'English', score: 67 },
                { title: 'English', score: 80 },
                { title: 'English', score: 80 }]
        },
        {
            name: "Peter Parker", exams: [
                { title: 'Gymnastics', score: 78 },
                { title: 'English', score: 80 },
                { title: 'English', score: 80 }
            ]
        }
    ]

}

function WriteStudentResults(students) {

    for (const student of students) {
        for (const exam of student.exams) {
            const result = exam.score >= 70 ? 'Pass' : 'Fail';
            console.log(`${student.name} - ${exam.title}- ${exam.score} - ${result}`);

        }
    }


}