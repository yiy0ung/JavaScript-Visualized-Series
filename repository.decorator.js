"Example Code"

/** Part 1 */
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


/** Part 2 */
Hosting(); // call function
console.log(varHosting);
console.log(constHosting);

var varHosting = 20;
const constHosting = 'Hello Universe?';
function Hosting() {
  console.log('It\'s just example code for looking beautiful in Github Repository');
}

// Output:
// It's just example code for looking beautiful in Github Repository
// undefinded
// Uncaught ReferenceErrer: Cannot access 'constHosting' before initialization <-- Error
