const express = require('express');
let router = express.Router();


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

// GET course
router.get('/:courseId', (req, res) => {
    
    var id = req.params.courseId;
 
    if (isFinite(id)) {
        id = id - 100;
        res.json(coursesData[id])
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

// UPDATE course
router.put('/:courseId', (req, res) => {
    
    var id = req.params.courseId;
 
    if (isFinite(id)) {
         id = id - 100;
         console.log(req.body);
         coursesData.splice(id, 1, req.body);
         res.send('Course updated.');
    } else {
         res.status(400).send({ message: 'incorrect id' });
    }
});

// INSERT new course
router.post('/', (req, res) => {

    console.log(req.body);

    coursesData.push(req.body); 
    res.send('Course added.');
});

// DELETE course
router.delete('/:courseId', (req, res) => {
    
    var id = req.params.courseId;
 
    if (isFinite(id)) {
        id = id - 1000;
        coursesData.splice(id, 1);
        res.send('Course deleted.');
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

module.exports = router;