// callback

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("people", sayGoodbye);

  //ternary operator
  const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// switch statement 
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log("Today is " + day);
// promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'sawera' };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error:', error));
  
  console.log('Fetching data...');








