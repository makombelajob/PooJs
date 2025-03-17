class Manager extends Employe {
    constructor(nom, prenom, salaire, departement) {
        super(nom, prenom, salaire);

        this.departement = departement;
    }

    afficherDetails() {
        console.dir(`${this.nom}, ${this.prenom}, ${this.salaire}, au departement de ${this.departement}`);
    }
}