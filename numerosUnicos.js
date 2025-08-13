function encontrarNumerosUnicos(numeros) {
  const contagem = {};

  for (const numero of numeros) {
    contagem[numero] = (contagem[numero] || 0) + 1;
  }

  const unicos = [];

  for (const numero of numeros) {
    if (contagem[numero] === 1) {
      unicos.push(numero);
    }
  }

  return unicos;
}

// Exemplo de uso:
const listaDeNumeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = encontrarNumerosUnicos(listaDeNumeros);

console.log(numerosUnicos);