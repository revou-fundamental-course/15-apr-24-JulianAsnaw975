document.getElementById('button-convert1').onclick = tempConvert
document.getElementById('button-convert2').onclick = secondConvert
document.getElementById('button-reset').onclick = reset

function tempConvert(){
    let celci = document.getElementById("celcius").value
    var fahre = document.getElementById("fahrenheit").value
    var kalkulasi = document.getElementById('kalkulasi').value 
    let disFahreInp = document.querySelector('#fahrenheit')
    let disFahreBtn = document.querySelector('#button-convert2')

    disFahreInp.setAttribute('readonly', true)
    disFahreBtn.setAttribute('disabled', true)

    let cToF = " * 1.8 + 32 "

    let hasil = ( parseFloat(celci) * 1.8 ) + 32 

    kalkulasi = celci + "°C" + cToF + "=" + " " + parseFloat(hasil).toFixed(2) + "°F"

    fahre = (parseFloat(celci) * 1.8) + 32

    document.getElementById('fahrenheit').value = parseFloat(fahre).toFixed(2)

    if (celci != ""){
        document.getElementById('kalkulasi').value = kalkulasi
    } else {
        document.getElementById('kalkulasi').value = ""
        disFahreInp.removeAttribute('readonly')
        disFahreBtn.removeAttribute('disabled')
    }

    return false
}

function secondConvert() {
    var fahrenheit = document.getElementById("fahrenheit").value
    let celcius = document.getElementById("celcius").value
    var calculation = document.getElementById('kalkulasi').value
    let disCelciInp = document.querySelector("#celcius")
    let disCelciBtn = document.querySelector("#button-convert1")

    disCelciInp.setAttribute('readonly', true)
    disCelciBtn.setAttribute('disabled', true)

    let fToC = " - 32 * 5/9 "
    
    let isi = ( parseFloat(fahrenheit) - 32 ) * 5/9 

    calculation = fahrenheit + "°F" +  fToC + "=" + " " + parseFloat(isi).toFixed(2) + "°C"
    
    celcius = ( parseFloat(fahrenheit) - 32 ) * 5/9

    document.getElementById('celcius').value = parseFloat(celcius).toFixed(2)

    if (fahrenheit != ""){
        document.getElementById('kalkulasi').value = calculation
    } else {
        document.getElementById('kalkulasi').value = ""
        disCelciInp.removeAttribute('readonly')
        disCelciBtn.removeAttribute('disabled')
    }
    
    return false
}

function reset() {
    document.getElementById('celcius').value = ''
    document.getElementById('fahrenheit').value = ''
    document.getElementById('kalkulasi').value = ''
    let ActvFahreInp = document.querySelector('#fahrenheit')
    let ActvCelciInp = document.querySelector("#celcius")
    let ActvCelciBtn = document.querySelector("#button-convert1")
    let ActvFahreBtn = document.querySelector("#button-convert2")

    ActvFahreInp.removeAttribute('readonly')
    ActvCelciInp.removeAttribute('readonly')
    ActvCelciBtn.removeAttribute('disabled')
    ActvFahreBtn.removeAttribute('disabled')

}