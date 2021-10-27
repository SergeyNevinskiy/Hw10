// 1
// const x = 10;
// const y = 7;
// x > y ? alert( "x больше, чем y" ) : alert( "x не больше, чем y" );

// 2
// const num = prompt("Введите число");
// if ( num % 2 === 0){
// 	alert ( "Число " + num + " четное" );
// }else{
// 	alert ( "Число " + num + " нечетное" );
// }

// 3

// const number = +prompt("Введите целое число");

// if (Number.isInteger(number)) {
//     const sign = Math.sign(number);
//     number = String(number);
//     const length = number.length;
//     if ((sign === 0) || (sign === -0)) {
//         alert("Ноль вводить нельзя");
//     } else if ((sign === 1) && (length === 1)) {
//         alert("Число " + number + " однозначное положительное.");
//     } else if ((sign === 1) && (length === 2)) {
//         alert("Число " + number + " двузначное положительное.");
//     } else if ((sign === 1) && (length === 3)) {
//         alert("Число " + number + " трехзначное положительное."); 
//     } else if ((sign === 1) && (length > 3)) {
//         alert("Число " + number + " многозначное положительное."); 
//     } else if ((sign === -1) && ((length - 1) === 1)) {
//         alert("Число " + number + " однозначное отрицательное.");
//     } else if ((sign === -1) && ((length - 1) === 2)) {
//         alert("Число " + number + " двузначное отрицательное.");
//     } else if ((sign === -1) && ((length - 1) === 3)) {
//         alert("Число " + number + " трехзначное отрицательное.");
//     } else if ((sign === -1) && ((length - 1) > 3)) {
//         alert("Число " + number + " многозначное отрицательное.");
//     }
// } else {
//     alert("Вы ввели не то, что нужно");
// }

// 4
// const firstNum = +prompt ( 'Введите первое число ' );
// const secondNum = +prompt ( 'Введите второе число ' );
// const thirdNum = +prompt ( 'Введите третье число' );
// if ( firstNum > secondNum && firstNum > thirdNum){
// 	alert ( `Максимальное значение ${firstNum}` );
// }else{
// 	if ( secondNum > thirdNum ){
// 		alert ( `Максимальное значение ${secondNum}` );
// 	}else{
// 		alert ( `Максимальное значение ${thirdNum}` );
// 	}
// }

// 5

// посмотреть видео