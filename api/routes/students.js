const express = require('express');
let router = express.Router(); // used to register different routes

// id of student (returned by search-function)
var arrId = -1;

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

// GET student (by ID)
router.get('/:studentId', (req, res) => {
    
    var stuId = parseInt(req.params.studentId);

    // find object by id
    var obj = findObjectByKey(studentsData, 'id', stuId);
    
    res.json(obj);
});

// UPDATE student
router.put('/:studentId', (req, res) => {
    
    var stuId = req.params.studentId;
    var obj = findObjectByKey(studentsData, 'id', parseInt(stuId));

    if (obj != null) {
        studentsData.splice(arrId, 1, req.body);    // unbedingt in Postman als JSON!
        res.send('Student updated.');
    } else {
        res.status(400).send({ message: 'incorrect id' });
    }
});

// INSERT new student ("npm install body-parser" needed!)
router.post('/', (req, res) => {

    studentsData.push(req.body); // append array with the JSON-data from browser
    res.send('Student added.');
});

// DELETE student
router.delete('/:studentId', (req, res) => {
    
    var stuId = req.params.studentId;
    var obj = findObjectByKey(studentsData, 'id', parseInt(stuId));

    if (obj != null) {
        studentsData.splice(arrId, 1); 
        res.send('Student deleted.');
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

// export configured routes to use them (I imported them in the app.js-file)
module.exports = router;

