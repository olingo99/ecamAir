const { application } = require('express');
const Voyage = require('../model/voyage');
const Voyageur = require('../model/voyageur');
var mysql = require("mysql");

let sql = require('../Database/sql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'ecamair2',
    multipleStatements:true,
});


// exports.final = function(req, res) {
//     let voyage = req.session.voyage;
//     console.log("aled");
//     console.log(voyage);
//     let sqlStringVoyage = "INSERT INTO voyage (destination, price, nb_passenger, assurance) VALUES ( '"+ voyage.destination+ "', "+ voyage.price+"," +voyage.nb_passenger+"," +voyage.assurance+")"
//     //let sqlStringPassenger = "INSERT INTO passenger (idvoyage, Name, Age) VALUES ( '"+ voyage.Voyageurs+ "', "+ voyage.price+"," +voyage.nb_passenger+"," +voyage.assurance+")"
//     connection.query(sqlStringVoyage, function(error, result){
//         if (error) console.log(error); 
//     });
//     let idVoyage;
//     let sqlSelect = "SELECT idvoyage FROM voyage WHERE destination = '"+ voyage.destination+ "' AND price =  "+ voyage.price+" AND nb_passenger =" +voyage.nb_passenger+" AND assurance = " +voyage.assurance;
//     connection.query(sqlSelect, function(error, result){
//         if (error) console.log(error); 
//         console.log(sqlSelect);
//         console.log(result);
//         idVoyage = result[0].idvoyage;
//         console.log(idVoyage)
//         let voyageurs = voyage.voyageurs;
//         for (let index=0; index < Object.keys(voyageurs).length; index++ ){
//             sqlStringPassenger = "INSERT INTO passenger (idvoyage, Name, Age) VALUES ( "+ idVoyage+ ", '"+ voyageurs[index].name+"',"+ voyageurs[index].age+")"
//             connection.query(sqlStringPassenger, function(error, result){
//                 if (error) console.log(error); 
//             });
//         }
//         res.render('final.ejs');
//     });

    
    
// };

// exports.final = function(req,res){
//     const voyage = req.session.voyage;
//     console.log(voyage.voyageurs.length);
//     console.log(req.session.voyage);
//     // convert list of voyageurs into a json with name and age    
//     var jsonArray = {};
//     for (i = 0; i < voyage.voyageurs.length; i++) {
//         jsonArray[voyage.voyageurs[i].name] = voyage.voyageurs[i].age;
//     };
//     // console.log(jsonArray)    
//     data = JSON.stringify(jsonArray);
//     connection.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected");
//         connection.query(`INSERT INTO voyage (destination, nb_passenger, assurance, passenger) VALUES ('${voyage.destination}', '${voyage.nb_passenger}', '${voyage.assurance? 1:0}', '${data}')`, function(err, result) {
//             if (err) throw err;
//             console.log('voyage added');
//         });
//     })
//     res.render('final.ejs');
// };

exports.final = function(req,res){
    const voyage = req.session.voyage;
    console.log(voyage.voyageurs.length);
    console.log(req.session.voyage);
    // convert list of voyageurs into a json with name and age    
    var jsonArray = {};
    for (i = 0; i < voyage.voyageurs.length; i++) {
        jsonArray[voyage.voyageurs[i].name] = voyage.voyageurs[i].age;
    };   
    data = JSON.stringify(jsonArray);
    sql.pushVoyage(voyage.destination, voyage.nb_passenger, voyage.assurance, data);
    res.render('final.ejs');
    // if (sql.pushVoyage(voyage.destination, voyage.nb_passenger, voyage.assurance, data)){
    //     res.render('final.ejs');
    // }
    // else{
    //     res.render('error.ejs');
    // }
};