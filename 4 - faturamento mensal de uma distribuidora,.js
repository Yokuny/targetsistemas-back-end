const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data4.json');
const rawData = fs.readFileSync(dataPath);
const faturamento = JSON.parse(rawData);

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
const percentuais = {};

for (const estado in faturamento) {
  percentuais[estado] = (faturamento[estado] / total) * 100;
}

for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// •	SP – R$67.836,43
// •	RJ – R$36.678,66
// •	MG – R$29.229,88
// •	ES – R$27.165,48
// •	Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve
// dentro do valor total mensal da distribuidora.
