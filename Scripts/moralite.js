/**
 * Created by Damien on 6/10/14.
 */
// principe, des orientations en fonction de choix apparaissent, et permettent d'évoluer dans la branche de "compétences"
var EMorality = {"evil":1, "holy":2, "ecolo":3, "scientist":4};
Object.freeze(EMorality);

function Morality(enumMorality, moralityLevel){
    this.MoralityOrientation = enumMorality;
    this.MoralityLevel = moralityLevel;
}

function PluriMoralities(){
    this.EvilMorality = new Morality(EMorality.evil, 0);
    this.HolyMorality = new Morality(EMorality.holy, 0);
    // à un moment peut etre que les unes aient une influence sur les autres
    this.EcoloMorality = new Morality(EMorality.ecolo, 0);
    this.ScientistMorality = new Morality(EMorality.scientist, 0);
}
