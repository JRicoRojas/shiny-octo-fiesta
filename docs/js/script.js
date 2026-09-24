console.log(document.title);
let testArray1 = [256, 256, 256];
let testArray2 = [256, 256, 256];
let testArray3 = [256, 256, 256];
let testArray4 = [256, 256, 256];
let testArray5 = [256, 256, 256];
const colorTest = document.getElementById("test-color");
let i = 0;
const list = document.getElementById("test-list");
const mensaje = document.getElementById("mensaje");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const btn = document.getElementById("btn-test");

function testCambioNumero(array){
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    array [0] = c1;
    array [1] = c2;
    array [2] = c3;
};
function randomPallette(){
  testCambioNumero(testArray1);
  testCambioNumero(testArray2);
  testCambioNumero(testArray3);
  testCambioNumero(testArray4);
  testCambioNumero(testArray5);
  color1.style.backgroundColor = `rgb(${testArray1[0]}, ${testArray1[1]}, ${testArray1[2]})`;
  color2.style.backgroundColor = `rgb(${testArray2[0]}, ${testArray2[1]}, ${testArray2[2]})`;
  color3.style.backgroundColor = `rgb(${testArray3[0]}, ${testArray3[1]}, ${testArray3[2]})`;
  color4.style.backgroundColor = `rgb(${testArray4[0]}, ${testArray4[1]}, ${testArray4[2]})`;
  color5.style.backgroundColor = `rgb(${testArray5[0]}, ${testArray5[1]}, ${testArray5[2]})`;
}

btn.addEventListener('click', function() {
  randomPallette();
});
randomPallette();