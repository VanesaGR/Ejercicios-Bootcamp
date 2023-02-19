// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "x" Y SI SE PONE PRIMERO ESTE CONSOLE LOG, DEVUELVE Y
console.log(mySecretLetter()); // devuelve "x"
