
// Classes In ES6
class creatures{
    constructor (type){
        if (typeof type !== 'string')
            throw new Error("Only Stings Accepted!");
        this.type = type;
    }
    creaturesType(){
        return "Type: " + this.type;
    } 
}

class livingInfo extends creatures{
    constructor(type, age){
        if (typeof type !== 'string')
            throw new Error("Type is string");
        if (typeof age !== 'number')
            throw new Error("Type is integer");
        super(type);
        this.age = age;
    }
    infos(){
        return "The Creature: " + this.type + " Live Aproximitly: " + this.age;
    }
}

let creature1 = new creatures("Planet");
console.log(creature1.creaturesType());
let creature2 = new livingInfo("Human", 90)
console.log(creature2.infos())