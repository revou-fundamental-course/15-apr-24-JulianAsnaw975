document.getElementById('button-convert').onclick = tempConvert
document.getElementById('button-reset').onclick = reset

function tempConvert(){
    var celci = document.getElementById("celcius").value
    var fahre = document.getElementById("fahrenheit").value
    var kalkulasi = document.getElementById('kalkulasi').value
    kalkulasi = 
    hasil = ("* 1.8 + 32")

    fahre = (parseInt(celci) * 1.8) + 32

    document.getElementById('fahrenheit').value = parseInt(fahre)
    document.getElementById('kalkulasi').value = hasil
    return false
}

function reset() {
    document.getElementById('celcius').value = ''
    document.getElementById('fahrenheit').value = ''
    document.getElementById('kalkulasi').value = ''
}