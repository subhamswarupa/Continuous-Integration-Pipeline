const User = require('../src/user');

describe('User Class', () => {
  test('creates a user with name and email', () => {
    const user = new User('Alice', 'alice@example.com');
    expect(user.name).toBe('Alice');
    expect(user.email).toBe('alice@example.com');
  });

  test('getProfile returns user details', () => {
    const user = new User('Bob', 'bob@test.com');
    const profile = user.getProfile();
    expect(profile.name).toBe('Bob');
    expect(profile.email).toBe('bob@test.com');
    expect(profile.createdAt).toBeInstanceOf(Date);
  });

  test('isValidEmail returns true for valid emails', () => {
    const user = new User('Test', 'test@example.com');
    expect(user.isValidEmail()).toBe(true);
  });

  test('isValidEmail returns false for invalid emails', () => {
    const user = new User('Test', 'not-an-email');
    expect(user.isValidEmail()).toBe(false);
  });

  test('isValidEmail returns false for empty email', () => {
    const user = new User('Test', '');
    expect(user.isValidEmail()).toBe(false);
  });
});
