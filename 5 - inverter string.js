const reverseString = (text) => {
  let inverted = "";
  for (let i = text.length - 1; i >= 0; i--) {
    inverted += text[i];
  }
  return inverted;
}

const inputString = "Exemplo";
console.log("String invertida:", reverseString(inputString));

// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
