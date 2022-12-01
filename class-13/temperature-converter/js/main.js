document.querySelector('#submit').addEventListener('click', convert)

function convert() {
    const fromFarenheit = document.querySelector('#farenheit').checked

    let converted = document.querySelector('#temperature').value
    let outputString;

    if (fromFarenheit) {
        converted = converted * 5 / 9 - 32;
        outputString = `${converted} °C`
    } else {
        converted = converted * 9 / 5 + 32
        outputString = `${converted} °F`
    }

    document.querySelector('#output').innerText = outputString;
}
