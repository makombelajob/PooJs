/**
 * Objectif : Créer une classe Employe avec des
propriétés nom, prenom et salaire.
• Créer une sous-classe Manager qui hérite
de Employe et ajoute une propriété departement.
• Surcharger la méthode afficherDetails pour inclure le
département
 */

class Employe {
    constructor(nom, prenom, salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
    }

    afficherDetails() {
        console.dir(`${this.nom} ${this.prenom}, avec salaire de ${this.salaire}`);
    }
}