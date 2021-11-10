function init() {
    console.log("student code has started")
    WriteStudentResults(GetStudentResults());
}

function GetStudentResults() {

    return [
        {
            name: "Bruce Wayne", exams: [
                { title: 'English', score: 80 },
                { title: 'Spanish', score: 80 },
                { title: 'Maths', score: 80 }
            ]
        },
        {
            name: "Tony Stark", exams: [
                { title: 'English', score: 67 },
                { title: 'Engineering', score: 89 },
                { title: 'Programming', score: 90 }]
        },
        {
            name: "Peter Parker", exams: [
                { title: 'Gymnastics', score: 78 },
                { title: 'Dance', score: 15 },
                { title: 'Climbing', score: 91 }
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