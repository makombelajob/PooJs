/**
 • Créer une sous-classe VoitureAutonome qui hérite 
deVoitureElectrique et ajoute une 
méthode activerAutonomie.
 */

class VoitureAutonome extends VoitureElectrique{
    constructor(marque, modele, autonomie, activerAutonomie){
        super(marque, modele, autonomie);
        this.activerAutonomie = activerAutonomie;
    }
    afficherActiverAutonomie() {
        super.activerAutonomie();
        console.dir(`L'autonomie est ${this.activerAutonomie}`);
    }
}