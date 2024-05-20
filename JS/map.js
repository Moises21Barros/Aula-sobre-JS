let alunos = [
    {
        Nome: 'Lucas',
        RA: 20240101,
        Matrículado: true,
    },

    {
        Nome: 'Leonardo',
        RA: 20240102,
        Matrículado: false,
    },

    {
        Nome: 'Pedro',
        RA: 20240103,
        Matrículado: true,
    },
]

let nomeAlunos = alunos.map((nome)=> {
        return nome.Nome
})

console.log(nomeAlunos);

let RA = alunos.map((ra)=> {
        return ra.RA
})

console.log(RA);

let Matrículado = alunos.map((matriculado)=> {
        return matriculado.Matrículado
})

console.log(Matrículado);