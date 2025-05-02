# Analisador de Risco de Asteroides 🚀

Este projeto contém uma função em JavaScript que avalia o risco de asteroides com base em sua velocidade, distância da Terra e diâmetro.

## 📜 Descrição

A função `dadosAsteroide(dados)` recebe uma string contendo informações de um asteroide e determina seu nível de risco com base em critérios pré-definidos.

A análise de risco é feita pela função auxiliar `verificaRisco(velocidadeKmh, distanciaMilhoesKm, diametroMetros)`, que categoriza o asteroide como **Alto**, **Moderado** ou **Baixo**, levando em conta:
- **Velocidade** acima de 50.000 km/h pode indicar alto risco.
- **Distância** menor que 10 milhões de km aumenta o risco.
- **Diâmetro** maior que 500 metros torna o impacto potencialmente mais perigoso.

## 📌 Estrutura do Código

1. A função `dadosAsteroide(dados)` recebe uma string de informações separadas por vírgula.
2. Os valores são convertidos para tipos numéricos apropriados.
3. O risco é avaliado e atribuído ao asteroide.
4. Retorna um objeto estruturado com todas as informações.

## 📊 Exemplo de Uso

```javascript
const info = "Asteroide Aphophis, 52000, 8.5, 600";
console.log(dadosAsteroide(info));
