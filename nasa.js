function verificaRisco(velocidadeKmh, distanciaMilhoesKm, diametroMetros) {
    if (velocidadeKmh > 50000 || distanciaMilhoesKm < 10 && diametroMetros > 500) {
        return "Alto";
    }

    if (velocidadeKmh > 30000 && velocidadeKmh <= 50000 && distanciaMilhoesKm < 10) {
        return diametroMetros > 500 ? "Alto" : "Baixo";
    }

    return "Moderado"
}

function dadosAsteroide(dados) {
    const infos = dados.split(",");
    const asteroide = infos[0];
    const velocidadeKmh = parseInt(infos[1].trim());
    const distanciaMilhoesKm = parseFloat(infos[2].trim());
    const diametroMetros = parseInt(infos[3].trim());

    const result = {
        asteroide: asteroide,
        velocidadeKmh: velocidadeKmh,
        distanciaMilhoesKm: distanciaMilhoesKm.toFixed(2),
        diametroMetros: diametroMetros,
        risco: verificaRisco(velocidadeKmh, distanciaMilhoesKm, diametroMetros)
    }

    return result
};