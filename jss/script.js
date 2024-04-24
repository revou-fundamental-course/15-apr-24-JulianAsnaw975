document.getElementById('button-convert1').onclick = tempConvert
document.getElementById('button-convert2').onclick = secondConvert
document.getElementById('button-reset').onclick = reset

function tempConvert(){
    let celci = document.getElementById("celcius").value
    var fahre = document.getElementById("fahrenheit").value
    var kalkulasi = document.getElementById('kalkulasi').value 

    let cToF = " * 1.8 + 32 "

    let hasil = ( parseFloat(celci) * 1.8 ) + 32 

    kalkulasi = celci + "°C" + cToF + "=" + " " + parseFloat(hasil).toFixed(2) + "°F"

    fahre = (parseFloat(celci) * 1.8) + 32

    document.getElementById('fahrenheit').value = parseFloat(fahre).toFixed(2)
    document.getElementById('kalkulasi').value = kalkulasi
    return false
}

function reset() {
    document.getElementById('celcius').value = ''
    document.getElementById('fahrenheit').value = ''
    document.getElementById('kalkulasi').value = ''
}

function secondConvert() {
    var fahrenheit = document.getElementById("fahrenheit").value
    let celcius = document.getElementById("celcius").value
    var calculation = document.getElementById('kalkulasi').value 

    let fToC = " - 32 * 5/9 "

    let isi = ( parseFloat(fahrenheit) - 32 ) * 5/9 

    calculation = fahrenheit + "°F" +  fToC + "=" + " " + parseFloat(isi).toFixed(2) + "°C"

    celcius = ( parseFloat(fahrenheit) - 32 ) * 5/9

    document.getElementById('celcius').value = parseFloat(celcius).toFixed(2)
    document.getElementById('kalkulasi').value = calculation
    return false
}