/* Ini File JS */

document.getElementById('button-f').onclick = tempConvert
document.getElementById('button-c').onclick = secondConvert
document.getElementById('button-resetC').onclick = reset
document.getElementById('button-resetF').onclick = resetF
document.getElementById('c-to-f-input').onkeyup = Valid1
document.getElementById('f-to-c-input').onkeyup = Valid2
let isReverse = true

function Valid1() {
    var change = document.getElementById('c-to-f-input').value
    let val = document.getElementById('entering')

    if (!change.match(/^[0-9]{10}$/)){
        val.style.display = "none"
        return false
    }
    return true
}

function Valid2() {
    var change = document.getElementById('f-to-c-input').value
    let val = document.getElementById('validate')

    if (!change.match(/^[0-9]{10}$/)){
        val.style.display = "none"
        return false
    }
    return true
}

function reverse() {
    document.getElementById('c-to-f-input').value = ""
    document.getElementById("f-to-c-input").value = ""
    document.getElementById("c-to-f-read").value = ""
    document.getElementById('f-to-c-read').value = ""
    document.getElementById('kalkulasi').value = ""
    let entering = document.getElementById('entering')
    let validate = document.getElementById('validate')
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');
    let cBtn = document.getElementById('button-celci')
    let fBtn = document.getElementById('button-fahre')

    if (isReverse) {
        fToC.style.display = "block"
        cToF.style.display = "none"
        fBtn.style.display = "none"
        cBtn.style.display = "block"
        entering.style.display = "none"
        validate.style.display = "none"
        isReverse = false
    } else {
        // ini tampilan default
        cToF.style.display = "block"
        fToC.style.display = "none"
        cBtn.style.display = "none"
        fBtn.style.display = "block"
        entering.style.display = "none"
        validate.style.display = "none"
        isReverse = true
    }
}

function tempConvert() {
    let celci = document.getElementById('c-to-f-input').value
    let fahre = document.getElementById('f-to-c-read').value
    var kalkulasi = document.getElementById('kalkulasi').value
    var entering = document.getElementById('entering') 

    let celToFahre = " * 1.8 + 32 "

    let hasilC = (parseFloat(celci) * 1.8) + 32

    kalkulasi = celci + "°C" + celToFahre + "=" + " " + parseFloat(hasilC).toFixed(2) + "°F"

    fahre = (parseFloat(celci) * 1.8) + 32

    document.getElementById('f-to-c-read').value = parseFloat(fahre).toFixed(2)

    if (celci != ""){
        document.getElementById('kalkulasi').value = kalkulasi
        entering.innerHTML = ""
        entering.style.display = "none"
        entering.style.transition = "none"
        entering.style.transitionDelay = "none"
    } else {
        document.getElementById('kalkulasi').value = ""
        entering.innerHTML = "please input a number !"
        entering.style.display = "flex"
        entering.style.transition = "0.5s ease-in-out 0.5s"
        entering.style.transitionDelay = "0.3s"
    }
    return false
}

function secondConvert() {
    let fahrenheit = document.getElementById("f-to-c-input").value
    let celcius = document.getElementById("c-to-f-read").value
    var calculation = document.getElementById('kalkulasi').value
    var valide = document.getElementById('validate') 

    let fahreToCel = " - 32 * 5/9 "

    let hasilF = (parseFloat(fahrenheit) - 32 ) * 5/9

    calculation = fahrenheit + "°F" +  fahreToCel + "=" + " " + parseFloat(hasilF).toFixed(2) + "°C"

    celcius = ( parseFloat(fahrenheit) - 32 ) * 5/9

    document.getElementById('c-to-f-read').value = parseFloat(celcius).toFixed(2)

    if (fahrenheit != ""){
        document.getElementById('kalkulasi').value = calculation
        valide.innerHTML = ""
        valide.style.display = "none"
        valide.style.transition = "none"
        valide.style.transitionDelay = "none"
    } else {
        document.getElementById('kalkulasi').value = ""
        valide.innerHTML = "please input a number !"
        valide.style.display = "flex"
        valide.style.transition = "0.5s ease-in-out 0.5s"
        valide.style.transitionDelay = "0.3s"
    }
    return false
}

function reset() {
    document.getElementById('c-to-f-input').value = ""
    document.getElementById("f-to-c-input").value = ""
    document.getElementById("c-to-f-read").value = ""
    document.getElementById('f-to-c-read').value = ""
    document.getElementById('kalkulasi').value = ""
}

function resetF() {
    document.getElementById('c-to-f-input').value = ""
    document.getElementById("f-to-c-input").value = ""
    document.getElementById("c-to-f-read").value = ""
    document.getElementById('f-to-c-read').value = ""
    document.getElementById('kalkulasi').value = ""
}