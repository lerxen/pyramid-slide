printPyramid(11,'#');

function printPyramid(height,string) {
  let str = string+string;
  let pyr = $('#pyramid')//.eq(0);
  //let pyr = document.getElementById('pyramid');
  pyr.text(""); //pyr.textContent = "";
  for (let i = 1; i < height; i++){
    str += "\u00A0";
  }
  str = str.split('').reverse().join('');
  let p = $('<p>'); //let p = document.createElement('p');
  p.text(str); //p.innerHTML = str;
  pyr.append(p);
  for (let i = 0; i < height-1; i++){
    str = str.slice(1);
    str += string;
    let elm = $('<p>'); //let elm = document.createElement('p');
    elm.text(str); //elm.innerHTML = str;
    pyr.append(elm);
  }

}
let symbol = $('#symbol').eq(0); //let symbol = document.getElementById('symbol');
let range = $('#height'); //let range = document.getElementById('height');
let rangeValue = $('#inputValue'); //let rangeValue = document.getElementById('inputValue');
rangeValue.text(range.val()); //rangeValue.innerHTML = range.value;

function showValue() {
  rangeValue.text(range.val()); //rangeValue.innerHTML = range.value;
  printPyramid(range.val(), symbol.val()); //printPyramid(range.value,symbol.value);
}

function changePyr() {
  printPyramid(range.val(),symbol.val()); //printPyramid(range.value, symbol.value);
}
