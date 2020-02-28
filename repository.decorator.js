"Example Code"

/** Part 1 ------------------------ */
const foo = () => console.log("First"); // The first item in call stack

// The callback function go to Web API. After waiting 500ms, 
// It is gonna queue and will be the third item in call stack.
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third"); // The second item in call stack

bar();
foo();
baz();

  // Output:
  // First
  // Third
  // Second


/** Part 2 ------------------------ */
Hosting(); // Function is stored with a reference to the entire function
console.log(varHosting); // Variable declared var keyword is initialized "undefined" type
console.log(constHosting); // Variable declared let or const keyword is not initialized 

var varHosting = 20;
const constHosting = 'Hello Universe?';
function Hosting() {
  console.log('It\'s just example code for looking beautiful in Github Repository');
}

  // Output:
  // It's just example code for looking beautiful in Github Repository
  // undefinded
  // Uncaught ReferenceErrer: Cannot access 'constHosting' before initialization <-- Error


/** Part 3 ------------------------ */
const name = 'Jane';
const age = 19;
const city = 'Seoul, South Korea';

function getPersonInfo() {
  const name = 'Alex';
  const age = 25;
  const gender = 'man';

  return `${name} is ${age}, lives in ${city}, and is the ${gender}`; // Outter scope can be referenced in the inner scope
}

console.log(getPersonInfo);
console.log(`${name} is ${age}, lives in ${city}, and is the ${gender}`); // Cannot reference the variable, gender in the inner scope

  // Output:
  // Alex is 25, lives in Seoul, South Korea, and is the man
  // Uncaught ReferenceError: gender is not defined <-- Error



