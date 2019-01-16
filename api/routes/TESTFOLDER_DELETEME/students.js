const express = require('express');
let router = express.Router(); // used to register different routes

// Array of students
let studentsData = [
    {
        id: 1000,
        name: "Hans Werner",
        address: "Kleinholzgasse 8, 7000 Eisenstadt",
        class: "3-A" 
    },
    {
        id: 1001,
        name: "Carina Hofmeister",
        address: "Dunkelwaldstraße 32, 7301 Deutschkreutz",
        class: "1-C" 
    },
    {
        id: 1002,
        name: "Agatha Christie",
        address: "Sackgasse 100, 7350 Oberpullendorf",
        class: "2-B" 
    },
    {
        id: 1003,
        name: "Joseph Klinik",
        address: "Stadtweg 11, 1130 Wien",
        class: "1-A" 
    },
    {
        id: 1004,
        name: "Gregor Gutmann",
        address: "Waldweg 3, 7050 Niemalsland",
        class: "3-C" 
    }
]

// GET all students
router.get('/', (req, res) => res.json(studentsData)); 

// GET student
router.get('/:studentId', (req, res) => {
    
    var id = req.params.studentId;
 
    if (isFinite(id)) {
        id = id - 1000;
      res.json(studentsData[id])
    } else {
      res.status(400).send({ message: 'incorrect id' });
    }
});

// UPDATE student
router.put('/:studentId', (req, res) => {
    
    var id = req.params.studentId;
 
    if (isFinite(id)) {
         id = id - 1000;
         console.log(req.body);
         studentsData.splice(id, 1, req.body);
         res.send('Student updated.');
    } else {
         res.status(400).send({ message: 'incorrect id' });
    }
});

// INSERT new student ("npm install body-parser" needed!)
router.post('/', (req, res) => {

    // read body data from req (incoming json)
    console.log(req.body);

    // append student to studentsData array (with data from body)
    studentsData.push(req.body); 
    res.send('Student added.');
});

// DELETE student
router.delete('/:studentId', (req, res) => {
    
    var id = req.params.studentId;
 
    if (isFinite(id)) {
        id = id - 1000;
        studentsData.splice(id, 1);
        res.send('Student deleted.');
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

// TODO: suchfunktion foreach für studenten, sonst wirds inkonsistent!!!

// GET student (ID) - NOT WORKING!!! 
/*
router.get('/:studentId', (req, res) => {
    
    var idofstudent = studentsData.map(function(i) {
        return i.id;
      });

    var id = req.params.studentId;
    for (let index = 0; index < studentsData.length; index++) {
        if (id === idofstudent) {
            res.json(studentsData[index]);
        } else {
            res.status(400).send({ message: 'student not found' });
        }
    }
});
*/

// export configured routes to use them (I imported them in the app.js-file)
module.exports = router;

