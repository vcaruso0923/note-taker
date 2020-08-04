const { notes } = require('../../db/db.json');
const router = require('express').Router();
const fs = require("fs");
const path = require("path");

router.post('/notes', (req, res) => {
    var data = req.body;
    console.log(data);

    const newNote = function () {
        notes.push(data);
        fs.writeFileSync(
            path.join(__dirname, '../../../db/db.json'),
            JSON.stringify({ animals: animalsArray }, null, 2)
        );
        return animal;
    }
    const newNoteTest = newNote();
    res.json(newNoteTest)
})

router.get('/notes', (req, res) => {
    let results = fs.readFileSync(__dirname +"../../../db/db.json");
    let parsedNotes = JSON.parse(results);
    console.log(parsedNotes);
    res.json(parsedNotes);
});

module.exports = router;