const { application } = require('express');
const Voyage = require('../model/voyage');
const Voyageur = require('../model/voyageur');

var voyage;

exports.confirmPassenger = function(req, res) {
    noms = req.body.Nom;
    ages = req.body.Age;
    voyage = new Voyage(req.session.voyage);
    // console.log("body");
    // console.log(req.body);
    // console.log(typeof noms);
    if (typeof noms == "string"){
        voyage.add_voyageur(new Voyageur(noms, ages));
    }
    else{
        for (let index=0; index < Object.keys(noms).length; index++ ){
            voyage.add_voyageur(new Voyageur(noms[index], ages[index]));
        }
    }

    console.log(voyage);
    req.session.voyage = voyage;
    res.render('summary.ejs', {destination:voyage.destination, voyageurs:voyage.voyageurs});
};