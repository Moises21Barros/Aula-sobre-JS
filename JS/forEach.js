let email = [
    'email1@gmail.com', //0
    'email2@gmail.com', //1
    'email3@gmail.com', //2
    'email4@gmail.com', //3
]

// for (let cont = 0; cont < email.length; cont++) {
//     console.log(`Email enviado para: ${email[cont]}`);
// }

// Valor do array
// Index do array
// Array completo.
email.forEach((email)=> {
    console.log(`Email enviado para: ${email}`);
})
console.log(`--- --- --- --- ---`);
email.forEach((valor, elemento, array)=> {
    console.log(`E-mail enviado para: ${valor}`);
    console.log(`E-mail enviado para: ${elemento}`);
    console.log(`E-mail enviado para: ${array}`);
})
console.log(`--- --- --- --- ---`);
// ()=> {
    
// }