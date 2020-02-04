// Modify your hello program such that if no name is given: hello(),
// it will print "Hello, world!", otherwise
// it behaves the same as previously.
const name = prompt('What is your name?');

function greet(name) {
  if (name === '') console.log('Hello World');
  else console.log('Hello, ' + name);
}

greet(name);

// Write a function tipAmount that is given the bill amount and the level of service
// (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%
// fair -> 15%
// bad -> 10%

function tipAmount(x, y) {
  const billAmount = Number(prompt('What is your bill amount?'));
  const service = prompt('How was your service?');

  if (service === 'good')
    console.log(billAmount * 0.2 + ' is your tip amount.');
  else if (service === 'fair')
    console.log(billAmount * 0.15 + ' is your tip amount');
  else if (service === 'bad')
    console.log(billAmount * 0.1 + ' is your tip amount');
}

tipAmount();

// Write a function totalAmount that takes the same arguments as tipAmount
// except it returns the total as the tip amount plus the bill amount.
// This function may make use of tipAmount as a sub-task.
function totalAmount(x, y) {
  const billAmount = Number(prompt('What is your bill amount?'));
  const service = prompt('How was your service?');

  if (service === 'good')
    console.log(billAmount * 1.2 + ' is your total bill.');
  else if (service === 'fair')
    console.log(billAmount * 1.15 + ' is your total bill.');
  else if (service === 'bad')
    console.log(billAmount * 1.1 + ' is your total bill.');
}

totalAmount();

// Write a function splitAmount that takes the bill amount and the level of service,
// and the number of people to split the bill between.
// It will return the final amount for each person.

function splitAmount(x, y, z) {
  const billAmount = Number(prompt('What is your bill amount?'));
  const service = prompt('How was your service?');
  const diners = Number(prompt('How many people are splitting the bill?'));

  if (service === 'good')
    console.log((billAmount * 1.2) / diners + ' is your total bill.');
  else if (service === 'fair')
    console.log((billAmount * 1.15) / diners + ' is your total bill.');
  else if (service === 'bad')
    console.log((billAmount * 1.1) / diners + ' is your total bill.');
}

splitAmount();
