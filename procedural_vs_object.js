var Personne = /** @class */ (function () {
    function Personne(name, age) {
        this.name = name;
        this.age = age;
    }
    Personne.prototype.tellMyName = function () {
        return "I am ".concat(this.name, ".");
    };
    Personne.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old.");
    };
    return Personne;
}());
var personne10 = new Personne("John", 40);
var personne20 = new Personne("Marie", 35);
console.log(personne10.tellMyName(), personne10.tellMyAge());
console.log(personne20.tellMyName(), personne20.tellMyAge());
