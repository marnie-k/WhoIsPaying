


function whosPaying(names) {
    
    var names = ["Marnie", "Tom", "Michael", "Catherine"];
    var numberOfPeople = names.length
    var randomPersonPosition= Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    var randomName = Math.random(names.length);
    
    return randomPerson + " is going to buy lunch today!"
   
}