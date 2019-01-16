const express = require('express');
let router = express.Router();

// id of course (returned by search-function)
var arrId = -1;

let coursesData = [
    {
        id: 100,
        name: "Networking",
        description: "Any description for the course called 'Networking'"
    },
    {
        id: 101,
        name: "Physics",
        description: "Any description for the course called 'Physics'"
    }, 
    {
        id: 102,
        name: "Software Developing",
        description: "Any description for the course called 'Software Developing'"
    },
    {
        id: 103,
        name: "Maths",
        description: "Any description for the course called 'Maths'"
    }, 
    {
        id: 104,
        name: "Project Management",
        description: "Any description for the course called 'Project Management'"
    },
    {
        id: 105,
        name: "Biology",
        description: "Any description for the course called 'Biology'"
    }
]

// GET all courses
router.get('/', (req, res) => res.json(coursesData)); 

// GET course (by ID)
router.get('/:courseId', (req, res) => {
    
    var couId = parseInt(req.params.courseId);

    // find object by id
    var obj = findObjectByKey(coursesData, 'id', couId);
    
    res.json(obj);
});

// UPDATE course
router.put('/:courseId', (req, res) => {
    
    var couId = req.params.courseId;
    var obj = findObjectByKey(coursesData, 'id', parseInt(couId));

    if (obj != null) {
        coursesData.splice(arrId, 1, req.body);    // unbedingt in Postman als JSON!
        res.send('Course updated.');
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

// INSERT new course 
router.post('/', (req, res) => {

    coursesData.push(req.body);
    res.send('Course added.');
});

// DELETE course
router.delete('/:courseId', (req, res) => {
    
    var couId = req.params.courseId;
    var obj = findObjectByKey(coursesData, 'id', parseInt(couId));

    if (obj != null) {
        coursesData.splice(arrId, 1); 
        res.send('Course deleted.');
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

// find object function
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            // store the ID
            arrId = i;
            // and return the object
            return array[i];
        }
    }
    return null;
}

module.exports = router;