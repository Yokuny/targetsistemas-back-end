const calculateSum = () => {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return SOMA;
};

console.log("Valor de SOMA:", calculateSum());

// 1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
