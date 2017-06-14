function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function componentToHex(c) {var hex = c.toString(16); return hex.length == 1 ? "0" + hex : hex;}
function rgbToHex(r, g, b) {return "#" + componentToHex(parseInt(r)) + componentToHex(parseInt(g)) + componentToHex(parseInt(b));}

function colorFillerHex(value) {
	console.log(value);
	if (value.length < 6) return;

	document.color.picker.value = "#" + cutHex(value);
	document.color.h.value = cutHex(value);
	document.color.picker.style.background = "#" + cutHex(value);

	document.color.r.value = hexToR(value);
	document.color.g.value = hexToG(value);
	document.color.b.value = hexToB(value);

	result(hexToR(value),hexToG(value),hexToB(value));
}

function colorFillerRGB() {
	red = document.color.r.value;
	green = document.color.g.value;
	blue = document.color.b.value;
	if (red == "" || green == "" || blue == "") return;

	console.log(red + ", " + green + ", " + blue);
	value = rgbToHex(red, green, blue);
	console.log(value);

	document.color.picker.value = "#" + cutHex(value);
	document.color.h.value = cutHex(value);
	document.color.picker.style.background = "#" + cutHex(value);

	result(hexToR(value),hexToG(value),hexToB(value));
}

function result(red, green, blue) {
	newCode = blue + 256 * green + 65536 * red;

	document.color.output.value = newCode;
	document.getElementById('code').innerHTML = "/give @p leather_chestplate 1 0 {display:{color:" + newCode + "}}";

	return newCode;
}

[document.color.picker, document.color.h]
	.forEach(function (element) {
		element.addEventListener('change', function(e) {
			colorFillerHex(e.target.value);
		});
	});

document.querySelectorAll('input[type="number"]')
	.forEach(function (element) {
		element.addEventListener('change', colorFillerRGB);
	});
