
class Voyage{
    constructor(nb_passenger, assurance, destination){
        if (assurance == undefined){
            let voyage = nb_passenger;
            this.price = voyage.price;
            this.nb_passenger = voyage.nb_passenger;
            this.assurance = voyage.assurance;
            this.destination = voyage.destination;
            this.voyageurs = voyage.voyageurs;
        }
        else{
            this.price = 0;
            this.nb_passenger = nb_passenger;
            this.assurance = assurance;
            this.destination = destination;
            this.voyageurs = [];
            this.computePrice();
        }

    }

    add_voyageur(voyageur){
        this.voyageurs.push(voyageur);
    }
    computePrice(){
        if (this.assurance){
            this.price += 20;
        }
        this.price += this.nb_passenger*45;
    }


}

module.exports = Voyage;