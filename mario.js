printPyramid(11,'#');

function printPyramid(height,string) {
  let str = string+string;
  let pyr = document.getElementById('pyramid');
  pyr.textContent = "";
  for (let i = 1; i < height; i++){
    str += "\u00A0";
  }
  str = str.split('').reverse().join('');
  let p = document.createElement('p');
  p.innerHTML = str;
  pyr.append(p);
  //console.log(str);
  for (let i = 0; i < height-1; i++){
    str = str.slice(1);
    str += string;
    let elm = document.createElement('p');
    elm.innerHTML = str;
    pyr.append(elm);
    //console.log(str);
  }

}
let symbol = document.getElementById('symbol');
let range = document.getElementById('height');
let rangeValue = document.getElementById('inputValue');
rangeValue.innerHTML = range.value;

function showValue() {
  rangeValue.innerHTML = range.value;
  printPyramid(range.value,symbol.value);
}

function changePyr() {
  printPyramid(range.value, symbol.value);
}

/*function check() {
  let para = document.getElementById('check');
  para.innerHTML = range.value;
}

range.addEventListener('click', check); */
