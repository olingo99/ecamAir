const { application } = require('express');
const Voyage = require('../model/voyage');
const Voyageur = require('../model/voyageur');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'ecamair2',
    multipleStatements:true,
});


// exports.pushVoyage = function(destination , nb_passenger, assurance, passenger){
//     return connection.connect(function(err) {
//         if (err){
//             console.log(err);
//             return false;
//         }
//         else{
//             console.log("Connected");
//             return connection.query(`INSERT INTO voyage (destination, nb_passenger, assurance, passenger) VALUES ('${destination}', '${nb_passenger}', '${assurance? 1:0}', '${passenger}')`, function(err, result) {
//                 if (err){
//                     console.log(err);
//                     return false;
//                 }
//                 else{
//                 console.log('voyage added');
//                 return true;
//                 }
//             });
//         }
//     })
// }

// exports.pushVoyage = function(destination , nb_passenger, assurance, passenger){
//     let querrySucces = true;
//     try{
//         connection.query(`INSERT INTO voyage (destination, nb_passengeer, assurance, passenger) VALUES ('${destination}', '${nb_passenger}', '${assurance? 1:0}', '${passenger}')`, function(err, result) {
//             if (err){console.log(err); throw err;}
//             else {console.log('voyage added');}

//         });
//     }
//     catch(err){
//         console.log(err);
//         querrySucces = false;
//     }
//     console.log(querrySucces);
//     return querrySucces;
// }

exports.pushVoyage = function(destination , nb_passenger, assurance, passenger){
    connection.query(`INSERT INTO voyage (destination, nb_passenger, assurance, passenger) VALUES ('${destination}', '${nb_passenger}', '${assurance? 1:0}', '${passenger}')`, function(err, result) {
        if (err){console.log(err);}
        else {console.log('voyage added');}
    });
}