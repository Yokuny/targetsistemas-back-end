const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data3.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const valores = data.filter((d) => d.valor > 0).map((d) => d.valor);

const menor = Math.min(...valores);
const maior = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

const diasAcimaMedia = valores.filter((v) => v > media).length;

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Dias acima da média:", diasAcimaMedia);

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa,
// na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
