/* Ini File JS */

// untuk memanggil button dan input kedalam fungsi
document.getElementById('c-to-f-input').onkeyup = validC
document.getElementById('f-to-c-input').onkeyup = validF
document.getElementById('button-f').onclick = tempConvert
document.getElementById('button-c').onclick = secondConvert
document.getElementById('button-reset-c').onclick = reset
document.getElementById('button-reset-f').onclick = resetF

// fungsi untuk reverse
let isReverse = true
function reverse() {
    document.getElementById('c-to-f-input').value = ""
    document.getElementById("f-to-c-input").value = ""
    document.getElementById("c-to-f-read").value = ""
    document.getElementById('f-to-c-read').value = ""
    document.getElementById('kalkulasi').value = ""
    let entering = document.getElementById('entering')
    let validate = document.getElementById('validate')
    let cToF = document.getElementById('c-to-f')
    let fToC = document.getElementById('f-to-c')
    let cBtn = document.getElementById('button-celci')
    let fBtn = document.getElementById('button-fahre')

    // jika reverse ditekan maka display validation required, °C input dan °F button akan mati juga display °F input dan °C button akan muncul
    if (isReverse) {
        fToC.style.display = "block"
        cToF.style.display = "none"
        fBtn.style.display = "none"
        cBtn.style.display = "block"
        entering.style.display = "none"
        validate.style.display = "none"
        isReverse = false
    // sebaliknya maka display °F input dan °C button akan mati juga display °C input dan °F button akan muncul
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

// fungsi validation required input number celcius ke fahrenheit saat convert 
function validC() {
    var change = document.getElementById('c-to-f-input').value
    let val = document.getElementById('entering')

    //jika angka dimasukkan maka validation required akan hilang
    if (!change.match(/^[0-9]{10}$/)){
        val.style.display = "none"
        return false
    }
    return true
}

// fungsi validation required input number fahrenheit ke celcius saat convert
function validF() {
    var change = document.getElementById('f-to-c-input').value
    let val = document.getElementById('validate')

    //jika angka dimasukkan maka validation required akan hilang
    if (!change.match(/^[0-9]{10}$/)){
        val.style.display = "none"
        return false
    }
    return true
}

// fungsi konversi dari celcius ke fahrenheit
function tempConvert() {
    let celci = document.getElementById('c-to-f-input').value
    let fahre = document.getElementById('f-to-c-read').value
    var kalkulasi = document.getElementById('kalkulasi').value
    var entering = document.getElementById('entering') 

    // flow konversi matematika dari celcius ke fahrenheit
    fahre = (parseFloat(celci) * 1.8) + 32
    
    document.getElementById('f-to-c-read').value = parseFloat(fahre).toFixed(1)
    
    // alur untuk menampilkan rumus celcius ke fahrenheit kedalam input cara kalkulasi
    let hasilC = (parseFloat(celci) * 1.8) + 32
    
    let celToFahre = " * 1.8 + 32 "
    
    kalkulasi = celci + "°C" + celToFahre + "=" + " " + parseFloat(hasilC).toFixed(1) + "°F"

    // jika input celcius dimasukkan angka saat konversi maka rumus celcius ke fahrenheit akan muncul kedalam input cara kalkulasi dan mematikan validation required jika belum memasukkan angka 
    if (celci != ""){
        document.getElementById('kalkulasi').value = kalkulasi
        entering.innerHTML = ""
        entering.style.display = "none"
        entering.style.transition = "none"
        entering.style.transitionDelay = "none"
    // ini sebaliknya jika tidak ada angka maka rumus celcius ke fahrenheit tidak muncul kedalam input cara kalkulasi dan memunculkan validation required untuk memasukkan angka
    } else {
        document.getElementById('kalkulasi').value = ""
        entering.innerHTML = "please input a number !"
        entering.style.display = "flex"
        entering.style.transition = "0.5s ease-in-out 0.5s"
        entering.style.transitionDelay = "0.3s"
    }
    return false
}

// fungsi konversi dari fahrenheit ke celcius
function secondConvert() {
    let fahrenheit = document.getElementById("f-to-c-input").value
    let celcius = document.getElementById("c-to-f-read").value
    var calculation = document.getElementById('kalkulasi').value
    var valide = document.getElementById('validate') 

    // flow konversi matematika dari fahrenheit ke celcius
    celcius = ( parseFloat(fahrenheit) - 32 ) * 5/9
    
    document.getElementById('c-to-f-read').value = parseFloat(celcius).toFixed(1)
    
    // alur untuk menampilkan rumus fahrenheit ke celcius kedalam input cara kalkulasi
    let hasilF = (parseFloat(fahrenheit) - 32 ) * 5/9
    
    let fahreToCel = " - 32 * 5/9 "
    
    calculation = fahrenheit + "°F" +  fahreToCel + "=" + " " + parseFloat(hasilF).toFixed(1) + "°C"

    // jika input fahrenheit dimasukkan angka saat konversi maka rumus fahrenheit ke celcius akan muncul kedalam input cara kalkulasi dan mematikan validation required jika belum memasukkan angka
    if (fahrenheit != ""){
        document.getElementById('kalkulasi').value = calculation
        valide.innerHTML = ""
        valide.style.display = "none"
        valide.style.transition = "none"
        valide.style.transitionDelay = "none"
    // ini sebaliknya jika tidak ada angka maka rumus fahrenheit ke celcius tidak muncul kedalam input cara kalkulasi dan memunculkan validation required untuk memasukkan angka
    } else {
        document.getElementById('kalkulasi').value = ""
        valide.innerHTML = "please input a number !"
        valide.style.display = "flex"
        valide.style.transition = "0.5s ease-in-out 0.5s"
        valide.style.transitionDelay = "0.3s"
    }
    return false
}

// fungsi untuk reset All Number Input
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