/**
 *  • Créer une sous-classe VoitureElectrique qui hérite 
deVehicule et ajoute une propriété autonomie.
 */

class VoitureElectrique extends Vehicule{
    constructor(marque, modele, autonomie){
        super(marque, modele);
        this.autonomie = autonomie;
    }
    activerAutonomie() {
        console.dir(`Un véhicule ${this.autonomie}`);
    }
}