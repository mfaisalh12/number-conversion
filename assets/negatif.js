let dec = document.getElementById('decimal');
let bin = document.getElementById('biner');
let oct = document.getElementById('oktal');
let hex = document.getElementById('hexadecimal');

function negatif(d) {
	if (d < 0) {
		return d >>> 0;
	} else {
		return 'false';
	}
}

function binNegatif(binStr) {
	const getSigned =
		parseInt(
			binStr.length >= 8 && binStr[0] === '1'
				? binStr.padStart(32, '1')
				: binStr.padStart(32, '0'),
			2,
		) >> 0;
	return getSigned;
}

function lengthCalc(val, base) {
	let lengthVal = 0;
	if (base == 8) {
		for (let i = val.length - 1; i > 0; i--) {
			if (val[i] == '7') {
				break;
			}
			lengthVal -= 1;
		}
	} else if (base == 16) {
		for (let i = val.length - 1; i > 0; i--) {
			if (val[i] == 'F') {
				break;
			}
			lengthVal -= 1;
		}
	}
	return lengthVal;
}

function calculate(val, base, convertFrom) {
	if (val.length === 0) {
		[
			(dec.value = null),
			(bin.value = null),
			(oct.value = null),
			(hex.value = null),
		];
		return null;
	}

	let inputVal = parseInt(val, base);

	let o = negatif(inputVal).toString(8).toUpperCase();
	let h = negatif(inputVal).toString(16).toUpperCase();

	switch (convertFrom) {
		case 'bin':
			dec.value = binNegatif(inputVal.toString(2)); //to decimal
			oct.value = inputVal
				.toString(8)
				.toUpperCase()
				.slice(lengthCalc(inputVal.toString(8), 8)); //to octa;
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
			bin.value = negatif(inputVal).toString(2).toUpperCase().slice(-8);
			oct.value = o.slice(lengthCalc(o, 8)); //to octal
			hex.value = h.slice(lengthCalc(h, 16)); //to hexadecimal
	}
}
