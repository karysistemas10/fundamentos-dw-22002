// let time= 20; //00 y 23
// let greeting;

// if (time >= 00 && time < 12){
//     greeting = 'Buenos dias!'
// }else if (time >= 12 && time <20){
//     greeting = 'Buenas tardes!'
// }else if (time >= 20 && time < 24){
//     greeting = 'Buenas noches!'
// }else{
//     greeting = 'La hora ingresada no es correcta'
// }

// // console.log(greeting)

// let day = 7;
// let text;

// switch (day) {
//   case 0:
//     text = "Lunes";
//     break;
//   case 1:
//     text = "Martes";
//     break;
//   case 2:
//     text = "Miercoles";
//     break;
//   case 3:
//     text = "Jueves";
//     break;
//   case 4:
//     text = "Viernes";
//     break;
//   case 5:
//     text = "Sabado";
//     break;
//   case 6:
//     text = "Domingo";
//     break;
//   default:
//     text = "No es un dia valido";

// }

// console.log(text);

// let speed = 60;
// let message = speed >100 ? 'vas muy rapido' : 'Vas a buena velocidad';

// // if (speed > 100){
// //     message= 'Vas muy rapido'
// // }else{
// //     message= 'Vas a una buena velocidad'
// // }

// console.log(message)

// if({}) console.log('verdadero')
// if(!'') console.log('verdadero')

// ciclos
// let veces = 100;

// for (let i = 0; i < veces; i++) {
//     console.log('Hello word',i)
// }

// let veces = 100;
// for (let i = 0; i <= veces; i++) {
//     if(i % 2 === 0){
//         console.log(i) 
//     }    
// }

//  let veces = 100;
// for (let i = 0; i <= veces; i++) {
//     if(i % 3 === 0)console.log(i) 
    
//  }

// numeros primos del 0 al 100

for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }