// const CODICE_PIN = 1234;

// function atm(){
//     let count= 0;
//     return function inner(){
//         if (count<3) {
//             count++;
//             let userInput= prompt('inserisci codice pin');
//             if (userInput==CODICE_PIN) {
//                 console.log('ok');
//             }else{
//                 console.log(`Codice pin sbagliato, riprova.\nTentativi restanti. ${3-count}`);
//             }
//         }else{
//             console.log('troppi tentativi');
//         }
//     }
// }
// const login= atm();
// login();

function getPropByName(prop){
    return function inner(object){
        return object[prop]
    }
}
const jedi= {
    "name": 'Anakin',
    "rank": 'Knight'
}

const getRank = getPropByName('rank');
console.log(getRank(jedi));


function checkIfEven(num){
    return num % 2 === 0
}
let ifEven= checkIfEven(6);
console.log(ifEven);