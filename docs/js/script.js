console.log(document.title);
let testArray = [256, 256, 256];


function testCambioNumero(array){
    let c1 = Math.floor(Math.random() * array[0]);
    let c2 = Math.floor(Math.random() * array[1]);
    let c3 = Math.floor(Math.random() * array[2]);
    array [0] = c1;
    array [1] = c2;
    array [2] = c3;
};


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

testCambioNumero(testArray)
console.log(testArray)

const test = document.getElementById("btn-test");
test.addEventListener('click', function() {
  console.log('El botón fue clickeado');
});
