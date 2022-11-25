// @ts-check
var form = document.querySelector("form");
var code = document.getElementById("code");
var result = document.getElementById("result");

function result() {
  /** @type {RadioNodeList} List of hideflag checkboxes */
  var checkboxes = form.elements.namedItem("hide");
  // Parse all the bit values from the "value" attribute
  var bits = Array.from(checkboxes).map(function (checkbox) {
    if (checkbox.checked) {
      return parseInt(checkbox.value, 10);
    } else {
      return 0;
    }
  });

  // Sum together the bit values
  var total = bits.reduce(function sum(accumulator, bit) {
    return accumulator + bit;
  });

  code.innerHTML = "/give @p iron_pickaxe 1 0 {HideFlags:" + total + "}";
  result.value = total;
  return total;
}

document.getElementById("hideflags").addEventListener("change", result);
