/*
*  Skill: in work, should have one negative effect (buying it in some way) and a positive one (increase whatever)
* */
function TBruteSkill(nom, description, image, effect, sousCompetencesBrutes, prix){
    this.Name = ko.observable(nom);

    // even though it's not relevant :p
    this.Description = ko.observable(description);
    this.Illustration = ko.observable(image);

    // actually maybe a skill should just be a collection of effects with an effect as a "type", a numeric variable operator, and a value
    this.Effect = [];
    this.RelatedSkills = sousCompetencesBrutes;
    this.Price = ko.observable(prix);

    this.GainLevel = function(){
        // read into write
        this.Price(this.Price() *2);
    }
}