const express = require('express');
let router = express.Router();

let courseGrades = [
    // every student has his own courses including their grades
    {
        studentID: 1000,
        courses: [
            {courseID: 101, grade: 2},
            {courseID: 103, grade: 4},
            {courseID: 104, grade: 1},
            {courseID: 105, grade: 1}
        ]
    },
    {
        studentID: 1001,
        courses: [
            {courseID: 100, grade: 1},
            {courseID: 101, grade: 2},
            {courseID: 103, grade: 2},
            {courseID: 105, grade: 3}
        ]
    },
    {
        studentID: 1002,
        courses: [
            {courseID: 100, grade: 1},
            {courseID: 101, grade: 1},
            {courseID: 102, grade: 2},
            {courseID: 103, grade: 2},
            {courseID: 105, grade: 4}
        ]
    }
]

// GET courses and grades of student (ID)
router.get('/:studentId/coursegrades', (req, res) => {
    var id = parseInt(req.params.studentId);

    // find object by id
    var obj = findObjectByKey(courseGrades, 'studentID', id);
    
    res.json(obj);
});

// find object function
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

module.exports = router;