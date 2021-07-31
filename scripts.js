let count = 10
for (i = 0; i < count; i++) {
    document.getElementById("szamok0-9").innerHTML += " A(z) " + (i + 1) + ". szám értéke: " + (i) + "<br>"
}


for (i = 1; i <= count; i++) {
    document.getElementById("szamok1-10").innerHTML += " A(z) " + (i) + ". szám értéke: " + (i) + "<br>"
}


var j = 1
for (i = 0; i <= 20; i++) {
    var remainder = i % 2
    if (i != 0 &&  remainder == 0) {
        document.getElementById("evennumbers").innerHTML += "A(z) " + (j) + ". szám értéke: " + (i) + "<br>"
        j++
    }
}


var N 
function printNumbersTill() {
    N = document.getElementById("numbers").value
    for (i = 0; i < N; i++) {
        document.getElementById("elsofunkcio").innerHTML += "A(z) " + (i+1) + ". szám értéke: " + (i+1) + "<br>"
    }
}


var firstnameValue
function greetingTo() {
    firstnameValue = document.getElementById("firstname").value
    document.getElementById("masodikfunkcio").innerHTML += " Hello " + firstnameValue + "! <br>"
}


var myarray = [0, 3, 6, 7, 9]
arrayExample(myarray)
function arrayExample(dataarray) {
    for (i = 0; i < dataarray.length; i++) {
        document.getElementById("myArray").innerHTML += dataarray[i] + "<br>"
    }
}


var myotherarray = [10, 20, 30, 50, 12]
myotherarray.forEach(arrayExample2)
function arrayExample2(dataarray) {
    document.getElementById("eachLoop").innerHTML += dataarray + "<br>"
}