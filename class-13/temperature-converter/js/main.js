//Write your pseduo code first!

// Get a smurf to listen for a button click
document.querySelector('#submit').addEventListener('click', convert)


function convert() {
    // Need to value that is in celsius
    const celsius = document.querySelector('#celsius').value

    // When the button clicks, do the math to convert
    const convertedTemp = (celsius * 9 / 5) + 32

    // Output the converted number to the DOM
    document.querySelector('#output').innerHTML = convertedTemp;
}
