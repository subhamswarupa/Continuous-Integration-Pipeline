const { add, subtract, multiply, divide } = require('./math');
const { capitalize, reverse, truncate } = require('./stringUtils');
const User = require('./user');

const num1 = 10;
const num2 = 5;

console.log('Math Operations:');
console.log(`  ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`  ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`  ${num1} x ${num2} = ${multiply(num1, num2)}`);
console.log(`  ${num1} / ${num2} = ${divide(num1, num2)}`);

console.log('\nString Utilities:');
console.log(`  capitalize('hello') = ${capitalize('hello')}`);
console.log(`  reverse('world') = ${reverse('world')}`);
console.log(`  truncate('Hello, World!', 5) = ${truncate('Hello, World!', 5)}`);

console.log('\nUser Management:');
const user = new User('Alice Johnson', 'alice@example.com');
console.log('  User Profile:', user.getProfile());
console.log('  Valid Email:', user.isValidEmail());

const invalidUser = new User('Bob', 'bob-invalid');
console.log('  Invalid Email Check:', invalidUser.isValidEmail());

console.log('\nBuild completed successfully!');
