function result() {
	var bits = new Array();
	var total = 0;

	for (var i = 0; i < document.hide.elements.length; i++) {
		var element = document.hide.elements[i];
		if (element.checked) {
			bits[i] = parseInt(element.dataset.value);
		} else {
			bits[i] = 0;
		}
	}

	for (var x = 0; x < bits.length; x++) {
		total += bits[x];
	}

	document.getElementById('code').innerHTML =
		'/give @p iron_pickaxe 1 0 {HideFlags:' + total + '}';
	document.getElementById('result').value = total;
	return total;
}

document.querySelectorAll('input[type="checkbox"]')
	.forEach(function (element) {
		element.addEventListener('change', result);
	})
