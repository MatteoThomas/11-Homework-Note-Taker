const store = require('../db/store');
const router = require('express').Router();
const fs = require("fs");


router.get('/notes', (req, res) => {
    console.log("API / Notes")
    store
        .getNotes()
        .then(notes => {
            return res.json(notes)
        })
        .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(note => {
            return res.json(note)
        })
        .catch(err => res.status(500).json(err))

});

router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch(err => res.status(500).json(err))
});

module.exports = router;