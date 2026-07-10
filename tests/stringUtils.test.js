const { capitalize, reverse, truncate } = require('../src/stringUtils');

describe('String Utilities', () => {
  test('capitalize capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('capitalize returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('reverse reverses a string', () => {
    expect(reverse('abc')).toBe('cba');
    expect(reverse('racecar')).toBe('racecar');
  });

  test('truncate returns full string if within limit', () => {
    expect(truncate('Hello', 10)).toBe('Hello');
  });

  test('truncate truncates long strings with ellipsis', () => {
    expect(truncate('Hello, World!', 5)).toBe('Hello...');
  });
});
