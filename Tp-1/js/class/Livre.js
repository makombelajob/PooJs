class Livre {
    constructor(titre, auteur, anneePublication) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
    };

    afficherDetails() {
        console.dir(`Le titre est ${this.titre} et son auteur est ${this.auteur} et publié en ${this.anneePublication}`);
    }

}