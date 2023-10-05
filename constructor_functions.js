// Constructor Functions
// are used to create objects with properties & methods
// similar to JS Classes but not as complex as classes (i.e. no inheritance)

function HouseKeeper (exp, name, skills) {
    this.exp = exp;
    this.name = name;
    this.skills = skills;
    
};


let maid1 = new HouseKeeper(5, "Alice", ["cooking", "washing dishes"]);
let maid2 = new HouseKeeper(2, "Rosalie", ["sweeping", "mopping"]);

// Retrieves all data regarding "maid1"
console.log(maid1);

// Retrieves the "skill" of "maid2"
console.log(maid1.skills);
