# Teste Técnico - Estágio em Desenvolvimento | Even3

Este repositório contém a solução para a parte de lógica do teste técnico da Even3.

---

## 🧠 Parte 1 – Lógica | Números Únicos

### O desafio
Escrever uma função que recebe uma lista de números e retorna apenas os que não se repetem.

* Exemplo: `[1, 2, 2, 3, 4, 4, 5]` -> `[1, 3, 5]`

### Minha solução
A solução foi implementada em JavaScript e está no arquivo `numerosUnicos.js`.

Para resolver o problema, utilizei uma abordagem com dois passos principais:

1.  **Contagem de frequência**: Primeiro, percorri a lista de entrada para contar quantas vezes cada número aparece. Para isso, usei um objeto onde a chave é o número e o valor é a sua contagem.
2.  **Filtragem**: Em seguida, percorri a lista novamente. Dessa vez, adicionei a uma nova lista apenas os números cuja contagem foi exatamente **1**.

Essa abordagem é eficiente, pois a lista é percorrida apenas duas vezes, independentemente do seu tamanho.

### Como executar

Para rodar o código, você precisa ter o **Node.js** instalado.
Basta abrir o terminal, navegar até a pasta do projeto e executar o seguinte comando:

```bash
node numerosUnicos.js
