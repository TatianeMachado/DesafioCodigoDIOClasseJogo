class Heroi {
  constructor(nome, idade, tipo) {
    (this.nome = nome), (this.idade = idade), (this.tipo = tipo);
  }
  partidas() {
    console.log("Quer continuar jogando??");
    let jogar = true;
    return jogar;
  }
  atacar(tipo, partidas) {
    let num = 0;
    while (num <= 0 && partidas === true) {
      switch (tipo) {
        case "mago":
          console.log("Usou mágia");
          break;
        case "guerreiro":
          console.log("Usou espada");
          break;
        case "monge":
          console.log("Usou artes marciais");
          break;
        case "ninja":
          console.log("usou shuriken");
          break;
        default:
          console.log("tipo não encotrado");
      }
      num++;
    }
  }
}
let pokemon = new Heroi("Pokemon", 27, "mago");
console.log(pokemon);
pokemon.atacar("mago", true);
