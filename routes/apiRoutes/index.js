const { notes } = require('../../db/db.json');
const router = require('express').Router();
const fs = require("fs");
const path = require("path");
var uuid = require('uuid');

router.post('/notes', (req, res) => {
    var noteData = req.body;
    noteData.id = uuid.v1();
    console.log(noteData);

    fs.readFile('db/db.json', function (err, data) {
        var json = JSON.parse(data);
        json.push(noteData);
            if (err) throw err;

        fs.writeFile("db/db.json", JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    })

    res.json(noteData)
})

router.get('/notes', (req, res) => {
    let results = fs.readFileSync(__dirname + "../../../db/db.json");
    let parsedNotes = JSON.parse(results);
    console.log(parsedNotes);
    res.json(parsedNotes);
});

module.exports = router;

