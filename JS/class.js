// class Pessoa {
//     Nome = Kimberlly
//     Cabelo = Preto
//     Idade = 19
//     Sexo = Feminino
// }

class Celular {
    // this.nome String: Da erro
    constructor(Marca, Modelo, Ano) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ano = Ano;
    }
    desbloquerCelular() {
        return 'Celular desbloqueado'
        // console.log('Celular desbloqueado');
    }
    desbloquerCelular2() {
        return 'Celular desbloqueado'
        // console.log('Celular desbloqueado');
    }
    efetuarLigacao() {
        return 'Efetuando ligação'
        // console.log('Efetuando ligação');
    }
}

class celularGamer extends Celular {
    constructor(Marca, Modelo, Ano, Ram, Cooler) {
        super(Marca, Modelo, Ano);
        this.ram = Ram;
        this.Cooler = Cooler;
    }
    ligarGameBooster() {
        console.log('Otimizar o jogo.');
    }
}

let celGamer1 = new celularGamer('Red Magic', '9PRO', 2024, 32, false)

class CelularGamerPremium extends celularGamer {
    constructor(Marca, Modelo, Ano, Ram, Cooler) {
        
    }
}

// let Kimberly = new Celular('Samsung', 'A32', 2021)
// console.log(typeof Kimberly);
// console.log(Kimberly.desbloquerCelular());
// console.log(Kimberly.desbloquerCelular2());
// console.log(Kimberly.efetuarLigacao());

// console.log('--- --- --- ---');

// let Gustavo = new Celular('Xiaomi Redmi', '8 pro', 2019)
// console.log(typeof Gustavo);
// console.log(Gustavo);

// console.log('--- --- --- ---')

// let Ermerson = new Celular('Xiaomi', 'X6 pro', 2024)
// console.log(typeof Ermerson);
// console.log(Ermerson);