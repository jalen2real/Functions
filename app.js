function name() {
    var name = prompt("What is your name?")
    return name
}

function hey(){
    var sad = alert
    return sad
}

var computer = 0
var human = 0

function human() {
    do {

        var ran2 = Math.floor(Math.random() * 10) +1
    
        human = human + ran2
    
        alert(`Human new number is ${ran2}. 
        
        Human new total is ${human}.`)
    
        if (human >= 20) {
            break
        }
    
        var decision = prompt(`Would you like another number? If you would like to stop, press "n" to stop.`)
    
    
    } while ( (human < 20) && (decision != "n"))
}

function computer(){
    do {

        var ran = Math.floor(Math.random() * 10) +1
    
        computer  = computer  + ran
    
        alert(`Computer new number is ${ran}. 
        
        Computer new total is ${computer}.`)
    
        if (computer >= 20) break
    
    
    
    } while ( computer < 16 )
}






console.log("Exit")