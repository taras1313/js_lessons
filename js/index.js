//alert is internal js FUNKTION
//if we put in TEXT-LITERAL we call it STRING

// alert ('hello!');

// ________________________

// we should not use funktion document.write to add some elements on the page, its justexample
// document.write('<div>hello </div>')
//function+method calls an OBJECT
// console.log('what?');

//_________________________
// let is keyword/comand for variable.
// = is operator and will understood as "is". 
// right part of variable well be calculated and gave to the variable name.
// we need to declarate variable 1 time with let, after that we can use just the name of variable.

// let carName = 'Tesla X'; //string
// let purchaseCarPrice =  100000 + 100; //number
// let carIsAvailable= true; //boolean
// const saleCarPrice = ' end price ' + purchaseCarPrice * 1.2;
//______________________________
// document.write(carName);
// document.write('<br>');
// document.write(purchaseCarPrice);
// document.write('<br>');
// document.write(carIsAvailable);
// document.write('<br>');
// document.write(saleCarPrice);
//______________________________
//difference between const and let: all variables, that was defined with comand let we can change many times. Const is static.
// as a rule we use const instead let.
//______________________________


// promt is a function
//we need to definite result as number!! with + or befor promt or parseInt(promt...). ParseInt will get whole number.
// const age = parseInt(prompt('enter your age'));
// const newAge = age + 1;
// document.write('next year u will be ' + newAge) ;
//_____________________________________________

//data types
// number: 1 NaN infinity;
// String: ABC "" '';
// boolean: true falce;
// undefined: variable hadn't and has not value; let variable;- will be undefined, becouse we didnt put in value;
// null: has not value but can it have; let variable = null;
// objekt const car {};
//symbol 
//____________________
// if else === > < >= <= !== () && () ()||()
// else if is like addon for basic if else. We use it to put in new condition;
// const age = parseInt(prompt('enter ur age'));

// if ( (age > 18) && (age < 70) ) {
// alert('you are adult');
// }
// else if (age === 18) {
// alert(' u are perfect');
// }
// else if ( (age >= 6) && (age < 18) ) {
//     alert('ur child')
    
// }
// else {
//     alert('u are old');
// }
//___________________________

// function add(a, b, c) {
//     const result = a + b + c;
//     return result;
// }

// const sum = add(100, 200, 200);
// document.write(sum);

//____________________
// document.write(Math.sqrt(16))
//!!!
// const a = parseFloat(prompt('Введіть перший коефіцієнт'));
// const b = parseFloat(prompt('Введіть другий коефіцієнт'));
// const c = parseFloat(prompt('Введіть третій коефіцієнт'));

// function solveQuadr(a, b , c) {
    
// }

// function diskr(a, b, c) {
    
// }


// function multi(a, b) {
//     const result = ;
//     return result;
// }

// const a = parseFloat(prompt('Введіть перший коефіцієнт'));
// const b = parseFloat(prompt('Введіть другий коефіцієнт'));
// const c = parseFloat(prompt('Введіть третій коефіцієнт'));
// const d = parseFloat(prompt('Введіть четвертий коефіцієнт'));


// const resultat = multi(a, b);

// alert(resultat);

// 4 + x = 5

// const a = parseFloat(prompt('введідть значення, яке додається до Х'));
// const b = parseFloat(prompt('введідть значення, яке додається до попереднього значення'));
// const c = parseFloat(prompt('введідть значення, результат'));

// const result = c - (a+b);
// alert(result);

// х+2+3=10. х=10

// a + b + x = c

// function quadr(a, b, c){
//     const result = c - b - a;
//     return result;
// }

// const a = parseFloat(prompt('введідть (a) в рівнянні x + a + b = c '));
// const b = parseFloat(prompt('введідть (b), в рівнянні x + a + b = c  '));
// const c = parseFloat(prompt('введідть (c), в рівнянні в рівнянні x + a + b = c '));
// const solving = quadr(a, b, c);
// alert(solving);

//https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B5_%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5#I_%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1._%D0%9E%D0%B1%D1%89%D0%B0%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D1%80%D0%BD%D0%B5%D0%B9
//введіть а...введіть б в рівнянні х + (промп а) + б
// d=b**-4*a*c



function diskr(a, b, c){
    const diskriminant = b*b - 4*a*c;
    return diskriminant;
}

const a = parseFloat(prompt('введідть коефіцієнт (a) для рівняння ax*x + bx + c = 0'));
const b = parseFloat(prompt('введідть коефіцієнт (b) для рівняння ax*x + bx + c = 0'));
const c = parseFloat(prompt('введідть коефіцієнт (c) для рівняння ax*x + bx + c = 0'));
const solving = diskr(a, b, c);
// document.write(solving);
const sqrtSolving = Math.sqrt(solving);

if (solving < 0) {
    alert('Ваші коефіцієнти задають від"ємний квадратний корінь дискримінанту. Спробуйте використати інші значення');
}


function square1(a, b, sqrSolving) {
    const formul1 = (-b + sqrtSolving) / (2 * a);
    return formul1;
}

const resultFormul1 = square1(a, b, sqrtSolving);
document.write(('Дискримінант = ') + solving);
document.write('<br>');
document.write(('x1,x2 = ') + (-b) + (' ± ') + (sqrtSolving) + ( '/' ) + ( 2*a ));
document.write('<br>');
document.write('х1 = ' + (resultFormul1) ) ;

function square2(a, b, sqrSolving) {
    const formul2 = (-b - sqrtSolving) / (2 * a);
    return formul2;
}

const resultFormul2 = square2(a, b, sqrtSolving);
document.write('<br>')
document.write('х2 = ' + (resultFormul2)) ;






 

