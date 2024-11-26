/*
let answer;
let noAnswer = 'No';
answer = prompt('What is the “official” name of JavaScript?', [noAnswer]);
if (answer === 'ECMAScript') {
    alert("Right!");
}
else {
    alert("You don`t know? ECMAScript!")
}
*/

/*
let number;
number = prompt('Enter a number');
if (number > 0) {
    alert("1")
} else if (number < 0) {
    alert("-1");
} else if (number === 0) {
    alert("0");
}*/

/*
let result;
let a = 1 ;
let b = 2 ;
result = ( a + b < 4 ) ? 'Below' : 'Over';
alert( result );
*/

/*
let message;
let login = prompt('Enter login');
message = (login === 'Employee') ? 'Hello' :
            login === 'Director' ? 'Greetings' :
                login === '' ? 'No login' : '';
alert(message);*/


/*
let age = prompt('Enter age');
if ( age >= 14 && age <= 90) {
} else if ( age < 14 || age > 90) {
} else if ( !(age >= 14 && age <= 90)) {
}*/

/*let login = prompt("Login","");
if (login === 'Admin'){
    let password = prompt("","");
    if (password === 'TheMaster'){
        alert("Welcome to the Master!");
    } else if ( password === null || password === "") {
        alert("Canceled");
    } else alert("Wrong Password");
} else if (login === '' || login === null){
    alert("Canceled");
} else {
    alert("I don't know you");
}*/


/*
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

    welcome = function() {
        alert("Hello!");
    };

} else {

    welcome = function() {
        alert("Greetings!");
    };
}
welcome();*/


/*
let ask = (question, yes, no) => {
    if(confirm(question)) return yes();
    else return no();
}

ask("Do you agree?",
    () => alert("You agreed"),
    () => alert("Canceled"));
*/

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
for (let key in user) {
    alert(key);
}*/


/*  Verificare daca obiectul este gol
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(object) {
 for (var key in object) {
   return false;
 }
 return true;
}*/

/* Insumarea valorilor unui obiect
let salaries = {
  John : 100,
  Ann : 160,
  Pete : 130,
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);*/

/* Dublarea proprietatilor numerice ale unui obiect
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
let multiplyNumeric = (menu) => {
  for(let key in menu ) {
    if( typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }
}
multiplyNumeric(menu);

for ( let x in menu ) {
  console.log(menu[x]);
}
*/
