let dec = document.getElementById('decimal');
let bin = document.getElementById('biner');
let oct = document.getElementById('oktal');
let hex = document.getElementById('hexadecimal');

function calculate(val, base, which) {
	if (val.length === 0) {
		dec.value = null,
		bin.value = null,
		oct.value = null,
		hex.value = null;
	return;
	}

    let inputVal = parseInt(val, base);

    switch(which) {
        case 'bin':
            dec.value = inputVal.toString(10).toUpperCase(); //to decimal
            oct.value = inputVal.toString(8).toUpperCase(); //to octa;
            hex.value = inputVal.toString(16).toUpperCase(); //to hexadecimal
        break;
        
        case 'oct':
            dec.value = inputVal.toString(10).toUpperCase();
            bin.value = inputVal.toString(2).toUpperCase(); //to biner
            hex.value = inputVal.toString(16).toUpperCase();
        break;

        case 'hex':
            dec.value = inputVal.toString(10).toUpperCase();
            bin.value = inputVal.toString(2).toUpperCase();
            oct.value = inputVal.toString(8).toUpperCase(); 
        break;

        default:
            bin.value = inputVal.toString(2).toUpperCase(); 
            oct.value = inputVal.toString(8).toUpperCase(); //to octal
            hex.value = inputVal.toString(16).toUpperCase(); //to hexadecimal
    }
}
