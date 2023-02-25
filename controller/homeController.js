const { application } = require('express');
const Voyage = require('../model/voyage');
const Voyageur = require('../model/voyageur');

var voyage;

exports.home = function(req, res) {
    res.render('home.ejs', {destination: "", nb_passenger: 0, insurance: false});
};

exports.renderAddPassenger = function(req, res) {
    voyage = new Voyage(req.body.nb_passenger, req.body.insurance=="on", req.body.destination);
    req.session.voyage = voyage;
    res.render('addPassenger.ejs', {nb_passenger: req.body.nb_passenger});
}