const { notes } = require('../../db/db.json');
const router = require('express').Router();
const fs = require("fs");
var uuid = require('uuid');
const path = require("path")

router.post('/notes', (req, res) => {
    var noteData = req.body;
    noteData.id = uuid.v1();

    fs.readFile(path.join(__dirname, '../../db/db.json'), function (err, data) {
        var json = JSON.parse(data);
        json.push(noteData);
            if (err) throw err;

        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('The new note was appended to file!');
        });
    })

    res.json(noteData)
})

router.get('/notes', (req, res) => {
    let results = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
    let parsedNotes = JSON.parse(results);
    res.json(parsedNotes);
});

module.exports = router;

