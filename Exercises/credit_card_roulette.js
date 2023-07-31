var my_group = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mrs. Puff", "Mr. Krabs", "Plankton"]


function whosPaying(names) {
    
    // Determines the total num of ppl 
    var num_of_ppl = names.length;
    
    // Selects a random name from the names array
    var rand_x = Math.random();
    rand_x = Math.floor((rand_x * num_of_ppl));
    
    // Announces the person paying for lunch
    return names[rand_x] + "will be paying today!";
}
whosPaying(my_group)
